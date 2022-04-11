import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLazyComponent } from './can-lazy.component';

const routes: Routes = [{ path: '', component: CanLazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanLazyRoutingModule { }
