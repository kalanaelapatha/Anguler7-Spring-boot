package com.API.REST.spring_backend;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200") //its allows request from another domain
@RestController
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloworld() {

		return "hello world";
	}

	// hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloworldbean() {

		return new HelloWorldBean("Hello world", 23);
	}

	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldbeanPathVariable(@PathVariable String name) {

		return new HelloWorldBean(String.format("HelloWorld,%s", name), 23);
	}
}
