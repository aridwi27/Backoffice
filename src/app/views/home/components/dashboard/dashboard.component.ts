import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  dataFilter: any;
  total: any;
  totalPage: any;
  itemsPerPage: number = 10;
  pager: any = {};
  pagedItems: any[] = [];
  constructor(private _service: UsersService) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this._service.getUser().subscribe({
      next: (res) => {
        this.data = res;
        this.dataFilter = res;
        this.total = res.length;
        this.setPage(1);
      },
    });
  }

  deleteData(id:number) {
    Swal.fire({
      title: 'Do you want to delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._service.deleteUser(id).subscribe({
          next: res => {
            this.getUser();
            Swal.fire('Delete!', '', 'success')
          },
          error: err => {
            Swal.fire('cancel delete', '', 'info')
          }
        })
     
      } else if (result.isDenied) {
        Swal.fire('cancel delete', '', 'info')
      }
    })
  }

  searchData(query: any) {
    let value = query.target.value;
    let filter = this.data.filter((data: any) =>
      data.username.toLowerCase().includes(value.toLowerCase())
    );
    this.dataFilter = filter;
    this.setPage(1);
  }
  setPage(page: number) {
    this.pager = this.paginate(this.dataFilter.length, page);

    this.pagedItems = this.dataFilter.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
    console.log(this.pagedItems, 'data paged items');
  }

  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = this.itemsPerPage,
    maxPages: number = 5
  ) {
    let totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );
    console.log({
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    });
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
