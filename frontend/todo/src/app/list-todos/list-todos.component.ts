import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todos{
    constructor(
      public id : number,
      public description: string,
      public done: boolean,
      public targetDate: Date

    ){

    }
  
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todos[]
    //  = [
    // new Todos(1,'Pro with Angular',false, new Date()),
    // new Todos(2,'Pro with Spirng Boot',false, new Date()),
    // new Todos(3,'I"am BlockChin enthuastic',false, new Date()),
        
        //]

  // todo = {
  //   id: 1,
  //   description: 'welcome'
  // }

  constructor( private todoService:TodoDataService) { }

  ngOnInit() {

    this.todoService.retrieveAllTodos('kalana').subscribe(
        response =>{
          console.log("list=of-todos");
          this.todos = response;
        } 

    )
  }

}
