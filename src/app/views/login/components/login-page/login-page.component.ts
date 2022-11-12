import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    username:[''],
    password:['']
  })
  constructor(    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  loginAction() {
    
    setTimeout(() => {
      let value = this.loginForm.value
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      if(value.username === 'admin' && value.password === 'admin'){
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        this.router.navigateByUrl('/home');
      }else {
  
      }
    }, 1000);


  }

}
