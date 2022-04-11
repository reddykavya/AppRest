import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'API12324';
    const req = request.clone({
      setHeaders:{
        API_KEY,
      }
    })
   
    
    return next.handle(req);

    // const startTime = (new Date()).getTime();
    // return next.handle(request).pipe(map(event => {
    //   if(event instanceof HttpResponse){
    //     const endTime = (new Date()).getTime();
    //     const diff = endTime - startTime;
    //     console.log(event.url+'succed in'+diff+'milliseconds')
        
    //   }
    //   return event;
  
    // }));
  }

}
