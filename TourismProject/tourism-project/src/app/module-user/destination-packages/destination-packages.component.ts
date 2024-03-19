import { Component } from '@angular/core';
import { Package } from '../../classes/pacakge.model';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination-packages',
  templateUrl: './destination-packages.component.html',
  styleUrls: ['./destination-packages.component.css']
})
export class DestinationPackagesComponent {
  constructor(private apiSerivce: ApiService,private readonly router : Router,private readonly activatedRoutes : ActivatedRoute){}

  listOfPackages!: Package[];

  ngOnInit(): void {
    
    this.apiSerivce.getAllPacakges().subscribe(data=>{
      this.listOfPackages=data;
      // console.log(data);
    });}

  // packages: Package[] =[new Package(1,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(2,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(3,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(4,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(5,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),]


  bookPass(id : number){
    this.router.navigate(['../ticket-book',id],{relativeTo:this.activatedRoutes});
    // console.log(id);

  }
}
