import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FirstComponent } from '../first/first.component';
import { SecondOneComponent } from '../second/second-one/second-one.component';
import { SecondTwoComponent } from '../second/second-two/second-two.component';
import { SecondComponent } from '../second/second.component';
import { MyRoutingModule } from './my-routing.module';

// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';



@NgModule({
  declarations: [
    
    FirstComponent,
    SecondComponent,
    SecondOneComponent,
    SecondTwoComponent,
   
  ],
  imports: [
    RouterModule,
    CommonModule,
    MyRoutingModule,
    
    
    // FirstComponent,
    // SecondComponent
  ]
})
export class MyModule { }
