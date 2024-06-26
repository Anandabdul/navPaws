import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { globalConstant } from 'src/app/common/global.constant';

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
  position: string = "Newbie Volunteer";
  id: string = "";

  getTempVolunteerData() {

    
    this.HttpClient.get<any>(globalConstant.volunteersAPI).subscribe (
      (data: any) => {
        this.TempVolunteerData = data;
      }
    );
  }
  
  deleteTempVolunteerDate(data: any) {
    
    this.HttpClient.delete(globalConstant.volunteersAPI + "/" + data.id).subscribe (
      () => {
        this.ngOnInit();
      }
    );
  }

  savePerVolunteerData(data: any) {
    
    let permVolunteersInfo = {
      "name": data.name,
      "age": data.age,
      "mobile": data.mobile,
      "email": data.email,
      "address": data.address,
      "position": "Newbie Volunteer",
    }
    
    this.HttpClient.post(globalConstant.permVolunteersAPI, permVolunteersInfo).subscribe (
      () => {
        alert("We Got a New Volunteer, Congradulations!");
        this.deleteTempVolunteerDate(data);
      }
    );
  }

  getPermVolunteerData() {
    
    this.HttpClient.get<any>(globalConstant.permVolunteersAPI).subscribe (
      (data: any) => {
        this.permVolunteerData = data;
      }
    );
  }

  giveToUpdate(data: any) {
    this.name = data.name;
    this.age = data.age;
    this.mobile = data.mobile;
    this.email = data.email;
    this.address = data.address;
    this.id = data.id;
  }

  updatePerVolunteerData() {
    let permVolunteersInfoUpdate = {
      "name": this.name,
      "age": this.age,
      "mobile": this.mobile,
      "email": this.email,
      "address": this.address,
      "position": this.position
    };

    this.HttpClient.put<any>(globalConstant.permVolunteersAPI + "/" + this.id, permVolunteersInfoUpdate).subscribe (
      () => {
        alert('data has been updated!')
        this.ngOnInit();
      }
    );
  }

  deletePerVolunteerData() {
    this.HttpClient.delete(globalConstant.permVolunteersAPI + "/" + this.id).subscribe (
      () => {
        alert('data has been deleted.')
        this.ngOnInit();
      }
    );
  }

}
