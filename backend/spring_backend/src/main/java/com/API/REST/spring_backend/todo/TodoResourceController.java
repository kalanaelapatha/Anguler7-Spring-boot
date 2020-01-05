package com.API.REST.spring_backend.todo;

import java.net.URI;
import java.util.List;

import javax.servlet.Servlet;
import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.API.REST.spring_backend.todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResourceController {

	@Autowired
	private TodoHardCodeedService todoService;

	// GET/users/{username}/todos
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();

	}
	// DELETE/users/{username}/todos

	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {

		// ResponseEntity help us to build specific request with specific status,That's
		// why we used it
		Todo todo = todoService.deleteById(id); // return related todo
		if (todo != null) {
			return ResponseEntity.noContent().build();// return no Content back that why we used ResponceEntity as to
														// return specific content
		}

		return ResponseEntity.notFound().build();// 404 Error

	}

	// GET/users/{username}/todos
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);
	}

	// PUT
	@PutMapping("users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
			@RequestBody Todo todo) {

		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	//Post Mapping
	
	@PostMapping("users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username,@RequestBody Todo todo) {

		Todo createTodo = todoService.save(todo);
		
		//Location
		//Get Current Resource URL
		//{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
						.path("/{id}").buildAndExpand(createTodo.getId()).toUri();//In here get the created resouce
		
		
		return ResponseEntity.created(uri).build();
	}
	
	
}
