import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  username = 'kalana'
  password = ''
  errorMeg = 'Invalid Credintials'
  invalidLogin = false


  constructor(private router: Router) { }

  ngOnInit() {
  }


 

  registerHandle() {

    console.log(this.username);

    if (this.username === 'kalana' && this.password === 'dummy') {

      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false;
    } else {

      this.router.navigate(['error'])

      this.invalidLogin = true;
    }
  }

}
