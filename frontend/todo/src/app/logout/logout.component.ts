import { Component, OnInit } from '@angular/core';
import { HardcodedeAuthenticationService } from '../service/hardcodede-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedeAuthenticationService:HardcodedeAuthenticationService  ) { }

  ngOnInit() {
   this.hardcodedeAuthenticationService.isUserLoggedOut();

  }

}
