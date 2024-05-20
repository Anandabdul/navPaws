import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit{

  constructor (private SessionService: SessionService) { }

  ngOnInit(): void {
    this.SessionService.checkUserSession();
  }

}
