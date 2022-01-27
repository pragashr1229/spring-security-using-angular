
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../../services/authenticate.service'
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private authenticateService: AuthenticateService, 
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  checkLogin(){
    var v1 = 'Basic ' + btoa(this.loginForm.value.username + ':' + this.loginForm.value.password);
    let headers = new HttpHeaders({ Authorization: v1} );
    this.authenticateService.checkLogin(headers).subscribe(
      results =>{
        console.log(results);
        sessionStorage.setItem('header', v1);
        sessionStorage.setItem('loginStatus', 'yes');
        this.router.navigate(['tasks']);
      })    
  }

}
