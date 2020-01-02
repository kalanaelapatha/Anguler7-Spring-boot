import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { combineLatest } from 'rxjs';
//import { AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  message: string = "Some Welcome message from welcome compont.ts"
  welcomeMessageFromService:string
  errorMessageFromService:string
  name=''

  //ActivatedRoute
  constructor(private route: ActivatedRoute,
              private service:WelcomeDataService ) { }

  ngOnInit() {

    // console.log(this.message)
    // console.log()
    this.name=this.route.snapshot.params['name']
    
  }


  
getWelcomeMessage(){ 
  // console.log(this.service.executedHelloWorldBeanService());// it will print the Observable object
  this.service.executedHelloWorldBeanService().subscribe(
    responce => this.handleSuccessfulResponce(responce),
    error => this.handleErrorResponce(error)
  );//need to subscribe otherwise you wont be able to see the responce back
  // this.service.executedHelloWorldBeanService().subscribe(); you can use that obervalbes to call the same service again and again
  // this.service.executedHelloWorldBeanService().subscribe(); // and aslo subscribe() method is the asychronus call so it will not return this result

}

getWelcomeMessageWithPathVariable(){ 
    this.service.executedHelloWorldServiceWithPathVariable(this.name).subscribe(
          responce => this.handleSuccessfulResponce(responce),
          error => this.handleErrorResponce(error)
        );
}

handleSuccessfulResponce(responce){
  // console.log(responce);
  // console.log(responce.message);
  this.welcomeMessageFromService= responce.message
}

handleErrorResponce(error){

  // console.log(error);
  // console.log(error.error);
  // console.log(error.error.message);
  this.errorMessageFromService= error.error.message
}


}
