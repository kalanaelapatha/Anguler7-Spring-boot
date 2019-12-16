import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedeAuthenticationService } from '../service/hardcodede-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'kalana'
  password = ''
  errorMeg = 'Invalid Credintials'
  invalidLogin = false

  constructor(private router: Router, private hardcodedeAuthntication: HardcodedeAuthenticationService) { }

  ngOnInit() {
  }

loginHandle() {

   
        //used basic authincation by using hardcodedeAuth Service Class
        if(this.hardcodedeAuthntication.authentication(this.username,this.password)){

          this.router.navigate(['welcome',this.username])
          this.invalidLogin = false;
        } else{
          this.invalidLogin = true;
        }
  }

}
