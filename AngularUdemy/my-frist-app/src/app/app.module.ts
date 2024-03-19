import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ServerComponent } from './server/server.component';
import { SuccessAlert } from './successalert/successalert.component';
import { WariningAlertComponent } from './warining-alert/warining-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessAlert,
    WariningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
