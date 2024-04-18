import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router,
              private SessionService: SessionService,
              private HttpClient: HttpClient) {}

  registerPage: string = '/register';

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  regUsername: string = "";
  regPassword: string = "";
  msg: string = "";

  // ngOnInit(): void {
  //   this.regUsername = 'Anand'
  // };

  

  checkLogin(){
    let apiUrl = "https://retoolapi.dev/h0aIaN/navPawsUsers" + "?regUsername" + this.regUsername + "&regPassword" + this.regPassword;

    this.HttpClient.get(apiUrl).subscribe (
    (users: any) => {
      console.log(users)
      if (users && users.length >= 0 && users[0].regUsername == this.regUsername && users[0].regPassword == this.regPassword) {
        this.msg = "success";
        sessionStorage.setItem("user", this.regUsername);
        this.redirectToHome();
      } else {
        this.msg = "failed";
      }
    }
    );
  };
  
}
