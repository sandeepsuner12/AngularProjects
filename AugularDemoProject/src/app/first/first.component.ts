import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  id : string='';
  constructor(private readonly activeRoute : ActivatedRoute){
    console.log(activeRoute);
    this.id=this.activeRoute.snapshot.params['id'];

  }

}
