import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todos } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo= new Todos(1,'',false, new Date())
    this.todoService.retrieveTodo('kalana', this.id).subscribe(

      data => this.todo = data
    )
  }

}
