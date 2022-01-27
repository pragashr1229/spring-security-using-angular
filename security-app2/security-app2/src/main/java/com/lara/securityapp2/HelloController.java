package com.lara.securityapp2;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HelloController {
	
	@GetMapping("/")  //ADMIN or USER
	public MyResponse hello() {
		System.out.println("from hello");
		return new MyResponse("I am from hello");
	}
	
	

	@GetMapping("hello1")  //ADMIN
	public MyResponse hello1() {
		System.out.println("from hello1");
		return new MyResponse("I am from hello1");
	}
	
	@GetMapping("hello2") //ADMIN
	public MyResponse hello2() {
		System.out.println("from hello2");
		return new MyResponse("I am from hello2");
	}

	@GetMapping("hello3") //USER
	public MyResponse hello3() {
		System.out.println("from hello3");
		return new MyResponse("I am from hello3");
	}
	
	@GetMapping("hello4") //USER
	public MyResponse hello4() {
		System.out.println("from hello4");
		return new MyResponse("I am from hello4");
	}
	
	@GetMapping("hello5") //USER or ADMIN
	public MyResponse hello5() {
		System.out.println("from hello5");
		return new MyResponse("I am from hello5");
	}

	@GetMapping("hello6") 
	public MyResponse hello6() {
		System.out.println("from hello6");
		return new MyResponse("I am from hello6");
	}
	
	
}
