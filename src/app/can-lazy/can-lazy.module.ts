import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanLazyRoutingModule } from './can-lazy-routing.module';
import { CanLazyComponent } from './can-lazy.component';


@NgModule({
  declarations: [
    CanLazyComponent
  ],
  imports: [
    CommonModule,
    CanLazyRoutingModule
  ]
})
export class CanLazyModule { }
