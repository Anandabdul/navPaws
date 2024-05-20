import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { globalConstant } from '../common/global.constant';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  setSession(sskey: string, ssValue: string) : void{
    sessionStorage.setItem(sskey,ssValue);
  }

  checkSession(sskey: string): boolean {
    let ssValue = sessionStorage.getItem(sskey) || "";
    if(ssValue == ""){
      return false;
    }else{
      return true;
    }
  }

  checkUserSession() {
    if(!this.checkSession(globalConstant.userSession)){
      this.router.navigate(['/']);
    }
  }

  removeSession() {
    sessionStorage.removeItem(globalConstant.userSession);
    this.router.navigate(['/']);
  }
}