import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

loginHandle() {

    console.log(this.username);

    if (this.username === 'kalana' && this.password === 'tani') {

      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false;
    } else {

      this.router.navigate(['error'])

      this.invalidLogin = true;
    }
  }

}
