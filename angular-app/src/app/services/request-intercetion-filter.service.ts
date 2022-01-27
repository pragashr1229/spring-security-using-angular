import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestIntercetionFilterService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    var header = sessionStorage.getItem('header');
    if(header != null){
      req = req.clone({      
        setHeaders: {        
          Authorization: header
        }
      });
    }
    return next.handle(req);
  }
}
