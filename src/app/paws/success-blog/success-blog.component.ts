import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-success-blog',
  templateUrl: './success-blog.component.html',
  styleUrls: ['./success-blog.component.scss']
})
export class SuccessBlogComponent implements OnInit{

  constructor (private SessionService: SessionService) { }

  ngOnInit(): void {
    this.SessionService.checkUserSession();
  }
}
