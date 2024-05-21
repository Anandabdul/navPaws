import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rescue-admin',
  templateUrl: './rescue-admin.component.html',
  styleUrls: ['./rescue-admin.component.scss']
})
export class RescueAdminComponent implements OnInit{

  rescueLists: any[] = [];
  constructor (private HttpClient: HttpClient) {}


  ngOnInit(): void {
    this.getRescueInfo();
  }


  getRescueInfo() {
    let rescueDetailsAPI = "https://retoolapi.dev/6L9XDB/rescueDetails"; 
    this.HttpClient.get<any>(rescueDetailsAPI).subscribe (
      (data: any) => {
        this.rescueLists = data;
      }, err => {
        console.log(err);
      }  
    )
  }

  deleteRescueInfo(rescueList: any) {
    let rescueDetailsAPI = "https://retoolapi.dev/6L9XDB/rescueDetails" + '/' + rescueList.id; 
    this.HttpClient.delete(rescueDetailsAPI).subscribe (
      (data: any) => {
        this.rescueLists = data;
        this.ngOnInit();
      }, err => {
        console.log(err);
      }  
    )
    // console.log(rescueList.id);
  }
}
