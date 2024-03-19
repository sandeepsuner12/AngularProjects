import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUserRoutingModule } from './module-user-routing.module';
import { DestinationPackagesComponent } from './destination-packages/destination-packages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookPacakgeComponent } from './book-pacakge/book-pacakge.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    DestinationPackagesComponent,
    BookPacakgeComponent,
    UserProfileComponent,
    // ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ModuleUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuleUserModule { }
