import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor (private Httpclient: HttpClient, private Router: Router) { }

  registerForm: any;
  // regUsername: string = "";
  // regEmail: string = "";
  // regMobNumber: number = 0;
  // regPswd: string = "";
  // regCnfmPswd: string = "";

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      accountType: new FormControl('user'), 
      regUsername: new FormControl(''),
      regEmail: new FormControl(''),
      regMobNumber: new FormControl(''),
      regPswd: new FormControl(''),
      regCnfmPswd: new FormControl('')
    });
  }

  // onFormSubmit() {
  //   console.log(this.registerForm.value.regCnfmPswd);
  // }
  
  postUsers() {
    let userUrl = "https://retoolapi.dev/h0aIaN/navPawsUsers";
    let adminUrl = "https://retoolapi.dev/rAKk3e/navPawsAdmin";
    
    let userDetails = {
      "regUsername": this.registerForm.value.regUsername,
      "regEmail": this.registerForm.value.regEmail,
      "regMobilenumber": this.registerForm.value.regMobNumber,
      "regPassword": this.registerForm.value.regPswd,
    };

    if (this.registerForm.value.regPswd === this.registerForm.value.regCnfmPswd) {

      if (this.registerForm.value.accountType === 'user') {
        this.Httpclient.post(userUrl, userDetails).subscribe (
          (users: any) => {
            alert("Registered Successfully!");
            this.Router.navigate(['/login']);
          }
        );
      } else if (this.registerForm.value.accountType === 'admin') {
        this.Httpclient.post(adminUrl, userDetails).subscribe (
          (users: any) => {
            alert("Registered Successfully!");
            this.Router.navigate(['/login']);
          }
        );
      }

    } else {
      alert("Password and Confirm Password that you've entered doesn't match.");
    }
    
  }

  loginPage: string = "/";
}
