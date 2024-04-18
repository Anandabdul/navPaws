import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navPaws';

  rescuePage: string = "/rescue";
  donatePage: string = "/donate";
  firstAidPage: string = "/firstAid";
  successBlogPage: string = "/successBlog";
  volunteerPage: string = "/volunteer";
}