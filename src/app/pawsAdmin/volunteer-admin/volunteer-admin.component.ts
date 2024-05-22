import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteer-admin',
  templateUrl: './volunteer-admin.component.html',
  styleUrls: ['./volunteer-admin.component.scss']
})
export class VolunteerAdminComponent implements OnInit{

  constructor (private HttpClient:HttpClient) {}

  ngOnInit(): void {
    this.getTempVolunteerData();
    this.getPermVolunteerData();
  }

  TempVolunteerData: any[] = [];
  permVolunteerData: any[] = [];
  name: string = "";
  age: string = "";
  mobile: string = "";
  email: string = "";
  address: string = "";

  getTempVolunteerData() {

    let volunteersAPI = "https://retoolapi.dev/xzR1uz/pawsvolunteerData";
    
    this.HttpClient.get<any>(volunteersAPI).subscribe (
      (data: any) => {
        this.TempVolunteerData = data;
      }
    );
  }
  
  deleteTempVolunteerDate(data: any) {
    let volunteersAPI = "https://retoolapi.dev/xzR1uz/pawsvolunteerData" + "/" + data.id;
    this.HttpClient.delete(volunteersAPI).subscribe (
      () => {
        this.ngOnInit();
      }
    );
  }

  savePerVolunteerData(data: any) {
    
    let permVolunteersAPI = "https://retoolapi.dev/qzbaSi/pawsPermVolunteers";

    let permVolunteersInfo = {
      "name": data.name,
      "age": data.age,
      "mobile": data.mobile,
      "email": data.email,
      "address": data.address,
      "position": "Newbie Volunteer",
    }
    
    this.HttpClient.post(permVolunteersAPI, permVolunteersInfo).subscribe (
      () => {
        alert("We Got a New Volunteer, Congradulations!");
        this.deleteTempVolunteerDate(data);
      }
    );
  }

  getPermVolunteerData() {

    let permVolunteersAPI = "https://retoolapi.dev/qzbaSi/pawsPermVolunteers";
    
    this.HttpClient.get<any>(permVolunteersAPI).subscribe (
      (data: any) => {
        this.permVolunteerData = data;
      }
    );
  }

  updatePerVolunteerData() {
    
  }

  deletePerVolunteerData() {

  }

}
