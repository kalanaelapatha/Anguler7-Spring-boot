package com.API.REST.spring_backend.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.API.REST.spring_backend.todo.Todo;

@RestController
public class TodoResource {

	@Autowired
	private TodoHardCodeedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(String username) {
		return todoService.findAll();

	}

}
