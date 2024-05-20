import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.scss']
})
export class NavBarAdminComponent {

  constructor (private SessionService: SessionService) {}

  volunteerAdminPage: string = "/volunteerAdmin";
  donateAdminPage: string = "/donateAdmin";
  rescueAdminPage: string = "/rescueAdmin";

  logout() {
    this.SessionService.removeSession();
  }
}
