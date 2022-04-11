
import { ResolveGuardGuard } from './resolve-guard.guard';
import { DeactiveGuardGuard } from './deactive-guard.guard';
import { CanLoadGuardGuard } from './can-load-guard.guard';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostDirectivesComponent } from './host-directives/host-directives.component';
import { TempalateComponent } from './tempalate/tempalate.component';
import { PipesComponent } from './pipes/pipes.component';
import { ViewparentComponent } from './viewparent/viewparent.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CounterComponent } from './counter/counter.component';
import { FormDataaComponent } from './form-dataa/form-dataa.component';
import { DirectivComponent } from './directiv/directiv.component';
import { AdminGuardGuard } from './admin-guard.guard';
const routes: Routes = [
  // resolve data is loaded before route is activated
{path:'pipes',component:PipesComponent,resolve:{
  data:ResolveGuardGuard
}},
{path:'template',component:TempalateComponent},
{path:'form-dataa',component:FormDataaComponent},
{path:'rxjs-operators',component:RxjsOperatorsComponent},
{path:'host-directives',component:HostDirectivesComponent},
{path:'viewparent',component:ViewparentComponent},
{path:'reactive',component:ReactiveComponent},
{path:'add-form',component: AddFormComponent},
{path:'counter',component:CounterComponent,canActivate:[AuthGuard]},
{path:'directiv',component:DirectivComponent,canDeactivate:[DeactiveGuardGuard]},
{path:'admin',canActivateChild:[AdminGuardGuard],

children: [
   
  {
    path:'',
    canActivateChild:[AdminGuardGuard],
    children:[
      {path:'edit',component:AdminEditComponent},
      {path:'delete',component:AdminDeleteComponent},
      {path:'update',component:AdminUpdateComponent}
    ]
  }
 
]
},
{ path: 'canLazy', 
  canLoad:[CanLoadGuardGuard],
  loadChildren: () => import('./can-lazy/can-lazy.module').then(m => m.CanLazyModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
