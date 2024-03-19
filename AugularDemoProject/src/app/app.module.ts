import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SecondOneComponent } from './second/second-one/second-one.component';
import { SecondTwoComponent } from './second/second-two/second-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// donee


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent/*HomeComponent*/]
})
export class AppModule { }
