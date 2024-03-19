import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/classes/pacakge.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css']
})
export class EditPackageComponent implements OnInit {

  packageId!:number;
  editForm! : FormGroup;
  updateStatus!:any;
  package ! : any;
  flag=false;
  
  constructor(private apiSerivce:ApiService,private readonly router : Router , private readonly activatedRoute : ActivatedRoute){

    
  }
  
  
   ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      this.packageId=params['id'];
    });
    this.apiSerivce.getPacakageWithId(this.packageId).subscribe(data=>{
      this.package=data;
      this.after1();
    });
  }
 
  after1() {
    console.log("this is pkg",this.package);
    // this.editForm = new FormGroup({
    //   id: new FormControl("",Validators.required),
    //   location: new FormControl("", Validators.required),
    //   days: new FormControl("", Validators.required),
    //   cost: new FormControl("", Validators.required),
    //   description: new FormControl("", Validators.required)
    // });
    this.editForm = new FormGroup({
      id: new FormControl(String(this.package.id),Validators.required),
      location: new FormControl(String(this.package.location), Validators.required),
      days: new FormControl(String(this.package.numberofDays), Validators.required),
      cost: new FormControl(String(this.package.price), Validators.required),
      description: new FormControl(String(this.package.description), Validators.required)
    });
    this.flag=true;
  }

  editPackage(){

    
    console.log(this.editForm);
    // this.package = new Package(
    //   this.editForm.controls['id'].value,
    //   this.editForm.controls['location'].value,
    //   this.editForm.controls['days'].value,
    //   this.editForm.controls['cost'].value,
    //   this.editForm.controls['description'].value,""
    // );
    this.package.location= this.editForm.controls['location'].value;
    this.package.numberofDays=this.editForm.controls['days'].value;
    this.package.price=this.editForm.controls['cost'].value;
    this.package.description=this.editForm.controls['description'].value;
   
    this.apiSerivce.updatePackageWithId(this.package).subscribe(data=>{
      console.log(data);
      this.updateStatus=data;
      this.router.navigate(['../../'],{relativeTo:this.activatedRoute})
    });
    console.log(this.packageId,"is edidted")
    console.log("this is pkg",this.package)
   
  }



}
