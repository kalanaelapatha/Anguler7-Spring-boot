import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todos } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todos


  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todos(this.id, '', false, new Date())
    if (this.id != -1) {
      this.todoService.retrieveTodo('kalana', this.id).subscribe(

        data => this.todo = data

      )

    }
  }


  updateTodo() {

    if (this.id === -1) {
      //this is the one methos which is used to create a todo or update a todo
      this.todoService.createTodo('kalana', this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos']) //to reirect the perticuler page
          }
        )
      //update part
    } else {
      this.todoService.updateTodo('kalana', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos']) //to reirect the perticuler page
          }
        )

    }

  }



} 
