package com.API.REST.spring_backend.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class TodoHardCodeedService {
	
	
	//this the static database instaed of original one\
	
	private static List<Todo> todos = new ArrayList<>();
	
	private static int idCounter=0;
	
	
	static {
		
		todos.add(new Todo(++idCounter,"Chamika","Lets Code",new Date(), false));
		todos.add(new Todo(++idCounter,"Vidura","Lets fun",new Date(), false));
		todos.add(new Todo(++idCounter,"binura","Lets Sleep",new Date(), false));
	}

	
	public List<Todo> findAll(){
		
		return todos;
	}
}
