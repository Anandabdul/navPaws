import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  rescuePage: string = "/rescue";
  donatePage: string = "/donate";
  firstAidPage: string = "/firstAid";
  sucsessBlogPage: string = "/successBlog";
  volunteerPage: string = "/volunteer";
}
