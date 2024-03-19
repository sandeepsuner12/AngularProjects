import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  implements OnInit{
//   isChangePasswordClicked: boolean=false;
//   changePasswordForm!: FormGroup ;
//   historyBookings:any;
  
  
//   changePassword() {
//   this.isChangePasswordClicked=true;
//   }
//   constructor(private apiService : ApiService){

  

//  }
  
  
//   ngOnInit(): void {
  
//     this.changePasswordForm = new FormGroup({
//       newPassword: new FormControl('',Validators.required),
//       confirmNewPassword: new FormControl('',Validators.required)
//     });
    
  
//   }


isChangePasswordClicked: boolean=false;
changePasswordForm!: FormGroup ;
listOfPackages!:any;
bookings:any = [];
user! : any;
// ={
//   id: 2,
//  firstName: "Ram",
//  lastName: "Bawa",
//  password: "$2a$10$dS5FpNdvMpD7PJyzLolv0O08u8PwG8PRNoQjcP5xDeuPAdnRK.0YC",
//  email: "a@gmail.com",
//  country: "Australia",
//  gender: "male",
//  phnumber: 123422113
// } ;

constructor(private apiService : ApiService,private readonly authService : AuthService){

}


ngOnInit(): void {

  this.changePasswordForm = new FormGroup({
    newPassword: new FormControl('',Validators.required),
    confirmNewPassword: new FormControl('',Validators.required)
  })

  this.apiService.getUserByEmail(this.authService.getUserName()).subscribe(data=>{
    // console.log(data);
    this.user=data

  })
  
  this.apiService.getTravelHistoryByEmail(this.authService.getUserName()).subscribe(travals=>{
      for(let traval of travals){
        let booking:any ={
          noOfPass :traval.numberOfPerson,
          travelDate: traval.startDate
        }
        this.getPackageWithId(booking,traval)
      }
    
      
      console.log(this.bookings);
    });
  
}

getPackageWithId(booking:any, traval:any){
  this.apiService.getPacakageWithId(Number(traval.packageid)).subscribe(toure=>{
    booking.loc=toure.location;
    booking.duration=toure.numberofDays;
    booking.cost=toure.price;
    this.bookings.push(booking);
})
}

changePassword() {
  // this.apiService.updatePasswordByeEamil(this.authService.getUserName()).subscribe(data=>{
  //       this.listOfPackages=data
  //     });
  }
     

  
}
