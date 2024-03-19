import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AugularDemoProject';
  constructor(private readonly router : Router){

  }

  nevigate(){
    //this.router.navigateByUrl('first/1');
     this.router.navigate(['first','1']);
  }
}
