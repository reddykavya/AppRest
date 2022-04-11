import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DirectivComponent } from './directiv/directiv.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuardGuard implements CanDeactivate<DirectivComponent> {
  canDeactivate(component: DirectivComponent){
    if(component.isDirty){
      return window.confirm("you have some unsaved unchanged")
    }
    return true;
  }
    
}
  

