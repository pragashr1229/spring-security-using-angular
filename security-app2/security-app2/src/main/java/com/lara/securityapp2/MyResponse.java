package com.lara.securityapp2;

public class MyResponse {
	private String message;
	public MyResponse(String message) {
		this.message = message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getMessage() {
		return message;
	}
}
