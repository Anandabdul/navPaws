import { Component, OnInit } from '@angular/core';
import { globalConstant } from 'src/app/common/global.constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donate-admin',
  templateUrl: './donate-admin.component.html',
  styleUrls: ['./donate-admin.component.scss']
})
export class DonateAdminComponent implements OnInit{

  ngOnInit(): void {
    this.getDonateData();
  }

  constructor (private HttpClient:HttpClient) { }

  donateData: any[] = [];

  getDonateData() {
    this.HttpClient.get<any>(globalConstant.donateAPI).subscribe (
      (data:any) => {
        this.donateData = data; 
        this.addToStock(this.donateData);
      }
    )
  };

  newspapers: number = 0;
  towels: number = 0;
  bedsheets: number = 0;
  tarpaulins: number = 0;
  dettol: number = 0;
  dogCollars: number = 0;
  masksGloves: number = 0;
  rice: number = 0;
  wheat: number = 0;
  birdFeed: number = 0;
  pediegree: number = 0;
  marieBiscuits: number = 0;
  catFood: number = 0;
  money: number = 10000;

  addToStock(data:any) {
    for (let donater of data) {
      if (donater.as === "stuff") {
        for (let item of donater.stuff) {
          if (item.category === "Newspaper") {
            this.newspapers += item.count;
          } else if (item.category === "Towels") {
            this.towels += item.count;
          } else if (item.category === "Bedsheets") {
            this.bedsheets += item.count;
          } else if (item.category === "Tarpaulins") {
            this.tarpaulins += item.count;
          } else if (item.category === "Dettol") {
            this.dettol += item.count;
          } else if (item.category === "Dog Collars") {
            this.dogCollars += item.count;
          } else if (item.category === "Surgical Masks & Gloves") {
            this.masksGloves += item.count;
          } else if (item.category === "Rice") {
            this.rice += item.count;
          } else if (item.category === "Wheat") {
            this.wheat += item.count;
          } else if (item.category === "Bird Feed") {
            this.birdFeed += item.count;
          } else if (item.category === "Pedigree") {
            this.pediegree += item.count;
          } else if (item.category === "Marie Biscuits") {
            this.marieBiscuits += item.count;
          } else if (item.category === "Cat Food") {
            this.catFood += item.count;
          }
        }
      } else if (donater.as === "money") {
        this.money += donater.amount;
      }
    }
  }

}
