import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executedHelloWorldBeanService(){
       return this.http.get('http://localhost:8080/hello-world-bean');
       console.log("Execute Hello World Bean Service ")

  }

  //http://localhost:8080/hello-world/path-variable/employee


  
  executedHelloWorldServiceWithPathVariable(name){
    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`); // in here if we want to use path variable we have to use tic chacter -> " ` "
    console.log("Execute Hello World Bean Service ")

}
}
