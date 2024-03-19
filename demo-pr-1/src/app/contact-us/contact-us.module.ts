import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactUSRoutingModule } from './contact-us-routing.module';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule, 
    ContactUSRoutingModule
  ]
})
export class ContactUsModule { }
