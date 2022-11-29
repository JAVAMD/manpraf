import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  loginForm:FormGroup;
  constructor(public fb:FormBuilder, public router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
  }
onLogedIn()
{
  if(this.loginForm.controls['userName'].value==="manish" && this.loginForm.controls['password'].value==="man123")
  {
    localStorage.setItem('role','Admin')
    this.router.navigateByUrl('role/Admin')
  }
  if(this.loginForm.controls['userName'].value==="work" && this.loginForm.controls['password'].value==="w123")
  {
    localStorage.setItem('role','Employee')
    this.router.navigateByUrl('role/Employee')
  }
  if(this.loginForm.controls['userName'].value==="consumer" && this.loginForm.controls['password'].value==="con123")
  {
    localStorage.setItem('role','Customer')
    this.router.navigateByUrl('role/Customer')
  }
}
}
