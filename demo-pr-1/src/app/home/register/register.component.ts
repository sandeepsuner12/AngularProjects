import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsTransferService } from 'src/app/services/details-transfer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  id: string = "EM100";
  data : any[]=[];

  constructor(public detailsTransferServive : DetailsTransferService ,private readonly rout: Router,private readonly activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      //id : new FormControl('',Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, /*Validators.pattern('[0-9]{10}')*/]),
      email: new FormControl('', Validators.email),
      dept: new FormControl('', Validators.required)
    })

    //this.registrationForm.controls['id']=this.id;

  }
  register() {
    console.log(this.registrationForm)
    if(this.registrationForm.status=="VALID"){

      this.data.push(this.id);
      this.data.push(this.registrationForm.controls['name'].value);
      this.data.push(this.registrationForm.controls['mobile'].value)
      this.data.push(this.registrationForm.controls['email'].value)
      this.data.push(this.registrationForm.controls['dept'].value)
      //console.log(this.data);
      this.detailsTransferServive.setDeatils(this.data);
      // this.rout.navigateByUrl('registration-details')
      this.rout.navigate(['../registration-details'], {relativeTo:this.activatedRoute})
    }
    else{
      //this.rout.navigateByUrl('registration-details')
    }
    
  }


}
