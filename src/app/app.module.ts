import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';

import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { CounterComponent } from './counter/counter.component';
import { HostDirectivesComponent } from './host-directives/host-directives.component';
import { TempalateComponent } from './tempalate/tempalate.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewparentComponent } from './viewparent/viewparent.component';
import { CustomDirective } from './custom.directive';
import { DirectivComponent } from './directiv/directiv.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AddFormComponent } from './add-form/add-form.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { FormDataaComponent } from './form-dataa/form-dataa.component';




@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    PipesComponent,
    CustomPipe,
    CounterComponent,
    HostDirectivesComponent,
    TempalateComponent,
    ViewchildComponent,
    ViewparentComponent,
    CustomDirective,
    DirectivComponent,
    ReactiveComponent,
    AdminComponent,
    RxjsOperatorsComponent,
    FormDataaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  providers: [{ provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorInterceptor,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
