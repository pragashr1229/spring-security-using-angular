import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = 'http://localhost:7074'
  constructor(private httpClient: HttpClient) { }

  /*
  callHello1(){
    var header = sessionStorage.getItem('header');
    let headers = new HttpHeaders({ Authorization: header} );
    return this.httpClient.get<any>(this.url + '/' + 'hello1', { headers });
  }

  callHello2(){
    var header = sessionStorage.getItem('header');
    let headers = new HttpHeaders({ Authorization: header} );
    return this.httpClient.get<any>(this.url + '/' + 'hello2', { headers });
  }

  callHello3(){
    var header = sessionStorage.getItem('header');
    let headers = new HttpHeaders({ Authorization: header} );
    return this.httpClient.get<any>(this.url + '/' + 'hello3', { headers });
  }
  callHello4(){
    var header = sessionStorage.getItem('header');
    let headers = new HttpHeaders({ Authorization: header} );
    return this.httpClient.get<any>(this.url + '/' + 'hello4', { headers });
  }
  callTest1(){
    var header = sessionStorage.getItem('header');
    let headers = new HttpHeaders({ Authorization: header} );
    return this.httpClient.post<any>(this.url + '/' + 'test1', {},  { headers });
  }
  */
callHello1(){
  return this.httpClient.get<any>(this.url + '/' + 'hello1');
}

callHello2(){
  return this.httpClient.get<any>(this.url + '/' + 'hello2');
}

callHello3(){
  return this.httpClient.get<any>(this.url + '/' + 'hello3');
}
callHello4(){
  return this.httpClient.get<any>(this.url + '/' + 'hello4');
}
callTest1(){
  return this.httpClient.post<any>(this.url + '/' + 'test1', {});
}

}
