package com.API.REST.spring_backend;

public class HelloWorldBean {

	private String message;
	private int value;

	public HelloWorldBean(String message, int value) {
		
		this.message=message;
		this.value=value;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}

}
