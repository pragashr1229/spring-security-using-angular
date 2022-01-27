import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor(private httpClient: HttpClient) {
    console.log('authenticate object');    
  }
 
  checkLogin(headers){
    return this.httpClient.get<any>('http://localhost:7074/', { headers });
  }

  get loginStatus(){
    return sessionStorage.getItem('loginStatus') != null ? true : false;
  }

}
