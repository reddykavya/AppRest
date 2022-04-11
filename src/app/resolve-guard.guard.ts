import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardGuard implements Resolve<any> {
 
  userObj = {
    userId : 10,
    usename:'asdfg'
  };

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.userObj;
  }
 
  
}
