import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Package } from 'src/app/classes/pacakge.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit{
   listOfPackages! : Package[];
  
   deleteStatus! : any;


  constructor(private apiSerivce: ApiService, private readonly router : Router, private readonly activatedRoutes : ActivatedRoute){


  }
  ngOnInit(): void {
    
    this.apiSerivce.getAllPacakges().subscribe(data=>{
      this.listOfPackages=data;
    });
    // location.reload();
  }
  // packagesList: Package[] =[new Package(1,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n ",""),
  // new Package(2,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(3,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(4,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),
  // new Package(5,"Madhya Predesh",10,15000,"This is sjadaks askjdbkajs askjdbksa askjbdkas ashbdhas askjbdka askjdbkasjbdjnas hbsaj dhasbldhbas jhasbdjn n "),]



  addPackage(){
    console.log("addd")
    // this.router.navigateByUrl('edit')
     this.router.navigate(['../add'],{relativeTo: this.activatedRoutes})
  }
  editPackage(pacakge: Package){
    // console.log(pacakge)
    // this.router.navigateByUrl('edit')
    

     this.router.navigate(['../edit',pacakge.id],{relativeTo: this.activatedRoutes})
  }


  deletePackage(pacakge : Package){
    this.apiSerivce.deletePackageWithId(pacakge.id).subscribe(status=>{
      this.deleteStatus=status;
      this.apiSerivce.getAllPacakges().subscribe(data=>{
        this.listOfPackages=data;
      });
    });
    console.log(pacakge.id," Deleted")
    // location.reload();
    
    // this.router.navigate(['../',pacakge.id],{relativeTo: this.activatedRoutes})
    
  }
}
