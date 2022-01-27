package com.lara.securityapp2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter{

	@Autowired
	private PersonService personService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(personService);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()  //for post, put, patch, delete
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // to access by angular client
		.antMatchers("/").hasAnyRole("ADMIN", "USER", "HR")
		.antMatchers("/hello1").hasRole("ADMIN")
		.antMatchers("/hello2").hasRole("ADMIN")
		.antMatchers("/hello3").hasRole("USER")
		.antMatchers("/hello4").hasRole("USER")
		.antMatchers("/hello5").hasAnyRole("ADMIN", "USER")
		.antMatchers("/test1").hasRole("HR")
		.antMatchers("/test1/*").hasRole("USER")
		.antMatchers("/test1/hello/*").hasRole("ADMIN")
		.anyRequest().authenticated()
		.and()
		.httpBasic()
		.and()
		.formLogin();	
	}
	
}












