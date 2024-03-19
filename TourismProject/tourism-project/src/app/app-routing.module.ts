import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DestinationPackagesComponent } from './module-user/destination-packages/destination-packages.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  // {path:'home',component:AppComponent},
  {path:'home',component:HomeComponent},
  // {path:'pacakge',component:DestinationPackagesComponent},
  {path:'login',component:LoginComponent ,children:[
    {path:'register',component:UserRegistrationComponent}
  ]},
  {path:'register',component:UserRegistrationComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'admin',canActivate:[AuthGuardGuard],loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'user',canActivate:[AuthGuardGuard],loadChildren:()=>import('./module-user/module-user.module').then(u=>u.ModuleUserModule)},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
