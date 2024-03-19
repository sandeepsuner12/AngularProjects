import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';

const routes: Routes = [
  // {
  //   path: 'Login', component: LogInComponent, children:
  //     [{ path: 'registration', component: RegisterComponent },]
  // },
  { path: 'Login', component: LogInComponent},
  {path:'registration',component:RegisterComponent},
  { path: 'registration-details', component: RegistrationDetailsComponent },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }