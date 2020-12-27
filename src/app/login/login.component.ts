import { Component, OnInit } from '@angular/core';
import { LoginservService } from '../services/loginserv.service';
import { Router } from '@angular/router';
import { UserservService } from '../services/userserv.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;


  constructor(
    public loginserv: LoginservService,
    private formBuilder: FormBuilder,
    public router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });

  }

  ngOnInit() {

  }

  onSubmit(loginData) {
    this.loginserv.login(loginData).subscribe(res => {
      localStorage.setItem('token', res.jwt);
      this.loginserv.isLoggedin = true;
      this.router.navigateByUrl('productslist')
    });
  }

}
