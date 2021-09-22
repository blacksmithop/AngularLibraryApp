import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private login: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.login.loggedIn()) {
      this.router.navigate(['']);
    }
  }
  LoginForm: FormGroup = this.fb.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required]
    }
  )

  SignUpForm: FormGroup = this.fb.group(
    {
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    }
  )

  checkCredentials() {
    this.login.loginUser(this.LoginForm.value)
      .subscribe(
        response => {
          let result = response;
          if (result.status) {
            localStorage.setItem('token', response.token)
            localStorage.setItem('role', response.role)
            this.router.navigate(['']);
          } else {
            alert('User not found')
            //window.location.reload();
          }
        })
  }

  createUser() {
    var postBody = this.SignUpForm.value;
    delete postBody['password2'];
    console.log(postBody)

    this.login.newUser(postBody)
      .subscribe(
        response => {
          this.SignUpForm.reset();
          alert("Created new user")
          //this.router.navigate(['auth'])
        })
  }
}
