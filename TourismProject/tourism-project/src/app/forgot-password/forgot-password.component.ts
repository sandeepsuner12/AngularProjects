import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  // forgotPasswordForm! : FormGroup;


  // ngOnInit(): void {

  //   this.forgotPasswordForm = new FormGroup({
  //     userName: new FormControl('',Validators.required),
  //     phoneNumber: new FormControl('',Validators.required),
  //     newPassword: new FormControl('',Validators.required),
  //     confirmNewPassword: new FormControl('',Validators.required)
  //   })
  // }
  forgotPasswordForm! : FormGroup;

  isVerified : boolean =false;
  flag : boolean=false;
  flag2 : boolean=true;

  user : any;
  userPwd:any;
  constructor(private apiServive : ApiService){}

  ngOnInit(): void {

    this.forgotPasswordForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      newPassword: new FormControl('',Validators.required),
      confirmNewPassword: new FormControl('',Validators.required)
    })
  }

  reset(){

    if(this.forgotPasswordForm.controls['userName'].valid && this.forgotPasswordForm.controls['phoneNumber'].valid){
      this.user={
        email:this.forgotPasswordForm.controls['userName'].value,
      phnumber:this.forgotPasswordForm.controls['phoneNumber'].value
      }
      // console.log(this.user)
      this.apiServive.verifyUserEmailandPhNo(this.user).subscribe(data=>{
        if(data.status){
          this.flag=true;
          this.isVerified=true;
          this.flag2=false;
        }
        else{
          alert("Details Not Mached")
        }
      })
    }

    
  }
  changePassword(){

    if(this.forgotPasswordForm.controls['newPassword'].value == this.forgotPasswordForm.controls['confirmNewPassword'].value){
      // console.log(this.user)
      this.userPwd={
        password:this.forgotPasswordForm.controls['newPassword'].value
      }
      this.apiServive.updatePasswordByeEamil(this.user.email,this.userPwd).subscribe(data=>{
        if(data.status){
          this.flag=false;
          this.isVerified=false;
          this.flag2=true;
          alert("Password Updated")
        }
        else{
          alert("Something went Worng")
        }
      })
    }
  }

}
