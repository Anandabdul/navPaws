import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor (private SessionService: SessionService) { }

  title = 'navPaws';

  homePage: string = "/home";
  rescuePage: string = "/rescue";
  donatePage: string = "/donate";
  firstAidPage: string = "/firstAid";
  successBlogPage: string = "/successBlog";
  volunteerPage: string = "/volunteer";
  adoptPage: string = "/adopt";

  logout() {
    this.SessionService.removeSession();
  }
}
