import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit{

  constructor (private SessionService: SessionService, private HttpClient:HttpClient) { }

  volunteerForm: any;

  ngOnInit(): void {
    this.SessionService.checkUserSession();
    this.volunteerForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      mobile: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    })
  }

  applyVolunteer() {
    
    let volunteersAPI = "https://retoolapi.dev/xzR1uz/pawsvolunteerData";

    let volunteerData = {
      "name": this.volunteerForm.value.name,
      "age": this.volunteerForm.value.age,
      "mobile": this.volunteerForm.value.mobile,
      "email": this.volunteerForm.value.email,
      "address": this.volunteerForm.value.address
    };

      this.HttpClient.post(volunteersAPI, volunteerData).subscribe (
        (data: any) => {
          alert("Application for Volunteering Submitted Sucessfully!");
          this.ngOnInit();
        }
      );
  }

}
