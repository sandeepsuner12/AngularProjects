import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminRoutingModule } from './admin.routing.module';
import { PackageListComponent } from './package-list/package-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EditPackageComponent } from './package-list/edit-package/edit-package.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPackageComponent } from './package-list/add-package/add-package.component';



@NgModule({
  declarations: [
    AdminLandingComponent,
    PackageListComponent,
    UserListComponent,
    BookingsComponent,
    EditPackageComponent,
    AddPackageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
