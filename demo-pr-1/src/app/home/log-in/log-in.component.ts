import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 

  loginForm!: FormGroup;
  constructor(private readonly route : Router, private readonly activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userID : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }
  validate(){
    console.log(this.loginForm);
    if(this.loginForm.status==="VALID"){
        //this.route.navigateByUrl('registration')
        this.route.navigate(['../registration'], {relativeTo:this.activatedRoute})
        // this.route.navigate(['registration'], {relativeTo:this.activatedRoute})
    }
  }


}
