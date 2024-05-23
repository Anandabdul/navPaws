import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { globalConstant } from 'src/app/common/global.constant';

@Component({
  selector: 'app-pet-data',
  templateUrl: './pet-data.component.html',
  styleUrls: ['./pet-data.component.scss']
})
export class PetDataComponent implements OnInit{

  constructor (private HttpClient:HttpClient) {}

  ngOnInit(): void {
    this.getPetData();
  }

  petData: any[] = [];

  petname: string = "";
  petType: string = "";
  petAge: string = "";
  resDate: string = "";
  resFrom: string = "";

  inputDataToEmpty() {
    this.petname = "";
    this.petType = "";
    this.petAge = "";
    this.resDate = "";
    this.resFrom = "";
  };

  savePetData() {
    
    let sendPetData = {
      "petName": this.petname,
      "animalType": this.petType,
      "age": this.petAge,
      "rescuedDate": this.resDate,
      "rescuedAddress": this.resFrom,
      "isAdopted": false,
      "adoptedToName": "-",
      "adoptedToMobile": 0,
    };
    
    this.HttpClient.post(globalConstant.rescuedAnimalData, sendPetData).subscribe (
      (data: any) => {
        alert("Pet's Data Added to the DataBase!");
        this.ngOnInit();
        this.inputDataToEmpty();
      }
    );
  };

  getPetData() {
    this.HttpClient.get<any>(globalConstant.rescuedAnimalData).subscribe (
      (data: any) => {
        this.petData = data;
      }
    );
  };
  
  deletePetData(data: any) {

    this.HttpClient.delete(globalConstant.rescuedAnimalData + '/' + data.id).subscribe (
      () => {
        alert(`${data.petName}'s data Deleted Sucessfully!`);
        this.ngOnInit();
      }
    );
  };

}
