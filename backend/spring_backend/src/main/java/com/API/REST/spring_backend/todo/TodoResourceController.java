package com.API.REST.spring_backend.todo;

import java.util.List;

import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
		Todo todo = todoService.delteById(id); // return related todo
		if (todo != null) {
			return ResponseEntity.noContent().build();// return no Content back that why we used ResponceEntity as to
														// return specific content
		}

		return ResponseEntity.notFound().build();// 404 Error

	}

}
