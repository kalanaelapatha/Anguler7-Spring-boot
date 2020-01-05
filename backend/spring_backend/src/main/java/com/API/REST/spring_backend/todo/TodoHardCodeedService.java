package com.API.REST.spring_backend.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodeedService {

	// this the static database instaed of original one\

	private static List<Todo> todos = new ArrayList<>();

	private static int idCounter = 0;

	static {

		todos.add(new Todo(++idCounter, "Chamika", "Lets Code", new Date(), false));
		todos.add(new Todo(++idCounter, "Vidura", "Lets fun 2", new Date(), false));
		todos.add(new Todo(++idCounter, "binura", "Lets Sleep", new Date(), false));
	}

	public List<Todo> findAll() {

		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	
	//Update todo method
	
	public Todo save(Todo todo) {
		
		if(todo.getId()== -1) {
			
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);//needed to want to update will delete and insert one with same id
			 
		}
		
		return todo;
	}
	 
}
