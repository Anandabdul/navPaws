import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { globalConstant } from 'src/app/common/global.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router,
              private SessionService: SessionService,
              private HttpClient: HttpClient) {}

  registerPage: string = '/register';

  redirectToUserHome() {
    this.router.navigate(['/home']);
  }

  redirectToAdminHome() {
    this.router.navigate(['/rescueAdmin']);
  }
  loginForm: any;
  // regUsername: string = "";
  // regPassword: string = "";
  // msg: string = "";

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      accountType: new FormControl('user'),
      regUsername: new FormControl(''),
      regPassword: new FormControl(''),
    })
  };

  

  getUsers(){

    if (this.loginForm.value.accountType === "user") {
      this.HttpClient.get(globalConstant.userUrl + "?regUsername=" + this.loginForm.value.regUsername + "&regPassword=" + this.loginForm.value.regPassword).subscribe (
      (users: any) => {
        console.log(users)
        if (users && users.length >= 0 && users[0].regUsername == this.loginForm.value.regUsername && users[0].regPassword == this.loginForm.value.regPassword) {
          sessionStorage.setItem("user", this.loginForm.value.regUsername);
          this.redirectToUserHome();
        } else {
        }
      }
      );
    } else if (this.loginForm.value.accountType === "admin") {
            this.HttpClient.get(globalConstant.adminUrl + "?regUsername=" + this.loginForm.value.regUsername + "&regPassword=" + this.loginForm.value.regPassword).subscribe (
      (users: any) => {
        console.log(users)
        if (users && users.length >= 0 && users[0].regUsername == this.loginForm.value.regUsername && users[0].regPassword == this.loginForm.value.regPassword) {
          sessionStorage.setItem("user", this.loginForm.value.regUsername);
          this.redirectToAdminHome();
        } else {
        }
      }
      );
    }
  };  
}
