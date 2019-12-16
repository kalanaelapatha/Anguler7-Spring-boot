import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedeAuthenticationService } from './hardcodede-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedeAuthenticationService: HardcodedeAuthenticationService, private routes:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedeAuthenticationService.isUserLoggedIn()) {
      return true;

    } else {
      this.routes.navigate(['login']);
      return false;
    }

  }

}
