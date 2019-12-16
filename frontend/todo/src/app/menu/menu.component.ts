import { Component, OnInit } from '@angular/core';
import { HardcodedeAuthenticationService } from '../service/hardcodede-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 // isUserLoggedIn : boolean = false;
  constructor(private hardcodedeAuthenticationService: HardcodedeAuthenticationService) { }

  ngOnInit() {

    //this.isUserLoggedIn=this.hardcodedeAuthenticationService.isUserLoggedIn();
  

  }

}
