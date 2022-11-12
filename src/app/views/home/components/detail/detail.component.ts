import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  idParams: any;
  data:any
  constructor(private route: ActivatedRoute, private _service: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (id: any) => {
        this.idParams = id.id;
      },
    });
    this.getValue()
  }

  getValue() {
    this._service.getUserDetail(this.idParams).subscribe({
      next:res => {
       this.data = res
      }
    })

}
}
