import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SecondOneComponent } from './second/second-one/second-one.component';
import { SecondTwoComponent } from './second/second-two/second-two.component';
import { MyComponent } from './my/my.component';

const routes: Routes = [

    {path:'', component : MyComponent},

  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
//   { path: 'first/:id', component: FirstComponent },
//   //{ path : 'second/:id' , component : SecondComponent},
//   {
//     path: 'second', component: SecondComponent, children: [
//       { path: 'second-one', component: SecondOneComponent },
//       { path: 'second-two', component: SecondTwoComponent },
//       { path: '', redirectTo: 'second-one', pathMatch: 'full' },

//     ]
//   },
//   { path: '', redirectTo: 'first', pathMatch: 'full' },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }