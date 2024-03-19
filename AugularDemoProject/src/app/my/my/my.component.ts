import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {
  constructor(private readonly router : Router){

  }

  nevigate(){
    //this.router.navigateByUrl('first/1');
     this.router.navigate(['first','1']);
  }

}
