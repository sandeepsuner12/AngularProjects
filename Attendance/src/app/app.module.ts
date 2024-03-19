import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInformationSectionComponent } from './student-information-section/student-information-section.component';
import { StudentsComponent } from './student-information-section/students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesFormsComponent } from './pipes-forms/pipes-forms.component';
import { ColorChangerDirective } from './custom-directives/color-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentInformationSectionComponent,
    StudentsComponent,
    PipesFormsComponent,
    ColorChangerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
