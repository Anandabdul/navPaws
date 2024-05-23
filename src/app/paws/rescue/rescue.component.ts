import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';
import { globalConstant } from 'src/app/common/global.constant';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.scss']
})
export class RescueComponent implements OnInit {

  constructor (private SessionService: SessionService, 
               private HttpClient: HttpClient) { }

  rescueForm: any;

  ngOnInit(): void {
    this.SessionService.checkUserSession()
    this.rescueForm = new FormGroup({
      animalType: new FormControl(''),
      animalTypeOthers: new FormControl(''),
      animalColor: new FormControl(''),
      whatHappened: new FormControl(''),
      address: new FormControl(''),
      mobNumber: new FormControl('')
    })
  }

  postRescue() {
    let aniType = this.rescueForm.value.animalType;
    let aniTypeOthers = '';
    if (aniType === "others") {
      aniTypeOthers = this.rescueForm.value.animalTypeOthers;
    } else if (aniType === "dog" || aniType === "cat") {
      aniTypeOthers = this.rescueForm.value.animalType;
    }

    let rescueInfo = {
      "animalType": aniTypeOthers,
      "animalColor": this.rescueForm.value.animalColor,
      "whatHappened": this.rescueForm.value.whatHappened,
      "address": this.rescueForm.value.address,
      "mobNumber": this.rescueForm.value.mobNumber,
    }
    
    this.HttpClient.post(globalConstant.rescueDetailsAPI, rescueInfo).subscribe (
      (data: any) => {
        alert("Submitted Sucessfully! \n We will contact you ASAP.");
      }
    );
  }
}
