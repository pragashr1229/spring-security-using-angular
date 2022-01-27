import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  }
  callHello1(){
    var v1 = 'Basic ' + btoa('abc:xyz');
    let headers = new HttpHeaders({ Authorization: v1} );
    this.httpClient.get<any>('http://localhost:7074/', { headers }).subscribe(
      results =>{
        console.log(results);
      })
  }

}
