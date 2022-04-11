import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserveService {

  constructor(private http:HttpClient) { }

     getmeals(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
     }
     
// getting data
     getUsers(){
     const headersone = new HttpHeaders({
       'content-type':'application/json',
       'authenticationToken':'87678676'
     });

     const paramsone = new HttpParams()
     .set('pageNum','10')
     .set('pageSize',100);

     return this.http.get('https://jsonplaceholder.typicode.com/users',{ headers:headersone, params:paramsone});
     
     }
// post data
     postUser(body:any){

      const headersPost = new HttpHeaders({
        
        'authenticationKey':'654564564'
      });
      const headersParamsPost = new HttpParams()
        
        .set('admin','10');
      
      return this.http.post('https://jsonplaceholder.typicode.com/users',body,{headers:headersPost, params:headersParamsPost});
     }
}
