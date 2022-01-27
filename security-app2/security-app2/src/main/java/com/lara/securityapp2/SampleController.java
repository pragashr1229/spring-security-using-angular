package com.lara.securityapp2;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class SampleController {
	@PostMapping("/test1")
	public MyResponse test1() {
		System.out.println("from test1");
		return new MyResponse("from test1");
	}	
	@GetMapping("/test1/a1")
	public MyResponse test11() {
		System.out.println("from test11");
		return new MyResponse("from test11/a1");
	}
	@GetMapping("/test1/b1")
	public MyResponse test12() {
		System.out.println("from test12");
		return new MyResponse("from test11/b1");
	}
	@GetMapping("/test1/hello/a1")
	public MyResponse test13() {
		System.out.println("from test12");
		return new MyResponse("from test11/hello/a1");
	}	
	@GetMapping("/test1/hello")
	public MyResponse test14() {
		System.out.println("from test12");
		return new MyResponse("from test11/hello/");
	}		
}
