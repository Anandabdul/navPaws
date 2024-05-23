import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { globalConstant } from 'src/app/common/global.constant';

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
    this.HttpClient.get<any>(globalConstant.rescueDetailsAPI).subscribe (
      (data: any) => {
        this.rescueLists = data;
      }, err => {
        console.log(err);
      }  
    )
  }

  deleteRescueInfo(rescueList: any) {
    this.HttpClient.delete(globalConstant.rescueDetailsAPI + '/' + rescueList.id).subscribe (
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
