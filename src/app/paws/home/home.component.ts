import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor (private SessionService: SessionService) {}

  rescuePage: string = "/rescue";
  donatePage: string = "/donate";
  firstAidPage: string = "/firstAid";
  sucsessBlogPage: string = "/successBlog";
  volunteerPage: string = "/volunteer";
  adoptPage: string = "/adopt";

  ngOnInit(): void {
    this.SessionService.checkUserSession();
  }
}
