import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Package } from '../classes/pacakge.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiSerivce: ApiService){}

  listOfPackages!: Package[];

  ngOnInit(): void {
    
    this.apiSerivce.getAllPacakges().subscribe(data=>{
      this.listOfPackages=data;
      // console.log(data);
    });}

}
