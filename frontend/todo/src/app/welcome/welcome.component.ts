import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import { AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  message: string = "Some Welcome message from welcome compont.ts"
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

  console.log(this.service.executedHelloWorldBeanService());
  this.service.executedHelloWorldBeanService().subscribe();//need to subscribe otherwise you wont be able to see the responce back
}



}
