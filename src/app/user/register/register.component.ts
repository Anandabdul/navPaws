import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor (private Httpclient: HttpClient,
               private Router: Router) { }

  regUsername: string = "";
  regEmail: string = "";
  regMobNumber: number = 0;
  regPswd: string = "";
  regCnfmPswd: string = "";

  
  postUsers() {
    let apiUrl = "https://retoolapi.dev/h0aIaN/navPawsUsers";
    
    let userDetails = {
      "regUsername": this.regUsername,
      "regEmail": this.regEmail,
      "regMobilenumber": this.regMobNumber,
      "regPassword": this.regPswd,
    };

    if (this.regPswd === this.regCnfmPswd) {
      
      this.Httpclient.post(apiUrl, userDetails).subscribe (
        (users: any) => {
          alert("Registered Successfully!");
          this.Router.navigate(['/login']);
        }
      );

    } else {
      alert("Password and Confirm Password that you've entered doesn't match.");
    }
    
    // console.log(this.regUsername);
  }

    

  loginPage: string = "/";
}
