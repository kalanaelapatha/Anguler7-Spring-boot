import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todos {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todos[]
  message: string
 

  constructor(
    private todoService: TodoDataService,
    private router: Router//if we want to go to another component we have to use that
    ) { }

  ngOnInit() {
    this.refreshTodo(); //it is used because we need to auto refresh after delete perticuler todo otherwise we need to manual refresh the page!!!

  }
  refreshTodo() {
    this.todoService.retrieveAllTodos('kalana').subscribe(
      response => {
        console.log("list=of-todos");
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Todo is deleted ${id}`)
    this.todoService.deleteTodo('kalana', id).subscribe(
      responce => {
        console.log(responce);
        this.message = `Delete of Todo  ${id}  Successfull !!`
        this.refreshTodo();
      }
    )
  }


  editTodo(id) {
    console.log(`Todo is Updated ${id}`)
    this.router.navigate(['todos',id]);
     }


}
