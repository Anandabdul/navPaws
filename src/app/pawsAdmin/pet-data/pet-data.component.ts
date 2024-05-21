import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    let rescuedAnimalData = "https://retoolapi.dev/KfpuRF/rescuedAnimalData";
    
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
    
    this.HttpClient.post(rescuedAnimalData, sendPetData).subscribe (
      (data: any) => {
        alert("Pet's Data Added to the DataBase!");
        this.ngOnInit();
        this.inputDataToEmpty();
      }
    );
  };

  getPetData() {
    let rescuedAnimalData = "https://retoolapi.dev/KfpuRF/rescuedAnimalData";
    this.HttpClient.get<any>(rescuedAnimalData).subscribe (
      (data: any) => {
        this.petData = data;
      }
    );
  };
  
  deletePetData(data: any) {
    let rescuedAnimalData = "https://retoolapi.dev/KfpuRF/rescuedAnimalData" + '/' + data.id;
    this.HttpClient.delete(rescuedAnimalData).subscribe (
      () => {
        alert(`${data.petName}'s data Deleted Sucessfully!`);
        this.ngOnInit();
      }
    );
  };

}
