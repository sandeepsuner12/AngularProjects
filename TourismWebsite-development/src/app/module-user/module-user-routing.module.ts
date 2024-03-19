import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationPackagesComponent } from './destination-packages/destination-packages.component';
import { BookPacakgeComponent } from './book-pacakge/book-pacakge.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  // {path:'',component:DestinationPackagesComponent,children:[
  //   {path:'ticket-book',component:BookPacakgeComponent}
  // ]},
  {path:'pacakge',component:DestinationPackagesComponent},
  {path:'ticket-book/:id',component:BookPacakgeComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'',redirectTo:'pacakge',pathMatch:'full'}
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleUserRoutingModule { }
