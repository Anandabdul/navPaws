import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit{

  constructor (private SessionService: SessionService) { }

  ngOnInit(): void {
    this.SessionService.checkUserSession();
  }
  
}