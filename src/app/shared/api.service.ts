import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private message = new BehaviorSubject<any>("hai iam sending message");


  constructor(private http:HttpClient) { }

  sendMessage(newmessage:any){
    this.message.next(newmessage);
  }

//return observable
  getMessage():Observable<any>{
    return this.message.asObservable();
  }

  
}
