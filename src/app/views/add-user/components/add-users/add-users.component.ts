import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { data } from 'src/app/shared/interface/data.interface';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  public employeeForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)]
    ],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthDate: ['', Validators.required],
    basicSalary: [0, [Validators.required]],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: ['', Validators.required],
  });

  maxDate:any= ''

  constructor(private fb: FormBuilder, private _service: UsersService) {}

  ngOnInit(): void {
    this.getDate()
  }


  getDate() {
    let today = new Date().toLocaleDateString();
    let reverse = today.split('/').reverse()
    let getDay = reverse.slice(1)
    let getYear = reverse.slice(0,1)
    this.maxDate = getDay.concat(getYear).reverse().join('-') 
  }


  formValue() {
    const data: data = this.employeeForm.value;
    this._service.addUser(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
