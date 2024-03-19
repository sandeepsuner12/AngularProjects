import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home',loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)},
  { path:'contact',loadChildren:()=> import('./contact-us/contact-us.module').then(y=>y.ContactUsModule)},
  {path:'' , redirectTo: 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
