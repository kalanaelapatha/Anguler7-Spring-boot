 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedeAuthenticationService {

  constructor() { }


    authentication(username, password){
       
        if (username === 'kalana' && password === 'tani') {
          
          sessionStorage.setItem('authenticaterUser', username);

      
            return true;
        }
        return false;
     }


     isUserLoggedIn(){

      let user= sessionStorage.getItem('authenticaterUser');

      return !(user === null);


     }

     isUserLoggedOut(){
      sessionStorage.removeItem('authenticaterUser');
     }
}