import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLandingComponent } from "./admin-landing/admin-landing.component";
import { PackageListComponent } from "./package-list/package-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { EditPackageComponent } from "./package-list/edit-package/edit-package.component";
import { AddPackageComponent } from "./package-list/add-package/add-package.component";


const routes : Routes = [

// {path:'admin-user',component:AdminLandingComponent,
{path:'',component:AdminLandingComponent,
children: [{path:'packages',component:PackageListComponent},
           {path:'users',component:UserListComponent},
           {path:'bookings',component:BookingsComponent},
           {path:'edit/:id',component:EditPackageComponent},
           {path:'add',component:AddPackageComponent},
           {path:'',redirectTo:'packages',pathMatch:"full"}
          ]
},
// {path:'',redirectTo:'admin-user', pathMatch: 'full'},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}