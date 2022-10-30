import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'news-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  passwordsMatching = false;
  isConfirmPasswordDirty = false;

  signupForm= this.formBuilder.group({
    firstName:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    lastName:['', [Validators.required]],
    email:['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    contact:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    password:['', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]],
    confirmPassword:['', [Validators.required]],
    role:['author', [Validators.required]],
  },
  {
    validator: this.ConfirmedValidator('password', 'confirmPassword'),
  })


  get g(){
    return this.signupForm.controls;
  }
   
 

  submitForm(){
    

    console.log("Sign up form data: ", this.signupForm.value)
  }

  
  ngOnInit(): void {
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }



}
