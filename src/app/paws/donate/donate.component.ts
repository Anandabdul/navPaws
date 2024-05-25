import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';
import { globalConstant } from 'src/app/common/global.constant';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit{

  constructor (private SessionService: SessionService, private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.SessionService.checkUserSession();
    this.cashWallet = Number(localStorage.getItem("cashWallet"))
  }

  name: string = '';
  mobile: number = 0;
  cashCategory: string = '';
  amount: number = 0;
  cashWallet: number = 0;

  sendMoney() {
    let donateMoney = {
      "name": this.name,
      "mobile": this.mobile,
      "cashCategory": this.cashCategory,
      "amount": this.amount,
      "as": "money"
    };

    this.HttpClient.post(globalConstant.donateAPI, donateMoney).subscribe (
      () => {
        this.cashWallet -= this.amount;
        localStorage.setItem("cashWallet", JSON.stringify(this.cashWallet));
        alert('Your Money sent to the NavPaws!');
        this.ngOnInit();
      }
    );
  }

  nameForStuff: string = '';
  mobileForStuff: string = '';
  stuffForStuff: string = '';
  countOfStuff: string = '';
  stuffs: any = [];

  addDonateCart() {

    let stuffNdCount = {
      "category": this.stuffForStuff,
      "count": this.countOfStuff
    };
    this.stuffs.push(stuffNdCount);
    // console.log(stuffNdCount);
  }

  sendStuff() {
      let donateStuff = {
        "name": this.nameForStuff,
        "mobile": this.mobileForStuff,
        "stuff": this.stuffs,
        "as": "stuff"
      };
      this.HttpClient.post(globalConstant.donateAPI, donateStuff).subscribe (
        () => {
          alert('Your Stuffs have sent to NavPaws.');
          this.ngOnInit();
        }
      );
  }

  deleteFrmCart(stuff:any) {
    let idToRemove = this.stuffs.indexOf(stuff);
    this.stuffs.splice(idToRemove, 1);
  }

}