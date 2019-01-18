import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

get email() { return this.signupForm.get('email'); }
     
get password() { return this.signupForm.get('password'); }
private genderList: string[];
private user:User;
signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup ({
      email: new FormControl('',
      [Validators.required, 
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormGroup({
        pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }),
      gender: new FormControl(),
      terms: new FormControl()
  })
 
  }

}
