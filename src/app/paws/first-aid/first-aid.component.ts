import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.component.html',
  styleUrls: ['./first-aid.component.scss']
})
export class FirstAidComponent implements OnInit{

  constructor (private SessionService: SessionService) { }

  ngOnInit(): void {
    this.SessionService.checkUserSession();
  }

}
