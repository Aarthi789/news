import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailOrUsernameValidator } from './usernameValidator';
@Component({
  selector: 'news-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }
  loginForm= this.formBuilder.group({
    userNameEmail:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), emailOrUsernameValidator(/[a-zA-Z0-9]{3,}/)]],
  
    password:['', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]],
 
   
  },
 )

  get g(){
    return this.loginForm.controls;
  }
   
  submitForm(){
    

    console.log("Sign up form data: ", this.loginForm.value)
  }

}
