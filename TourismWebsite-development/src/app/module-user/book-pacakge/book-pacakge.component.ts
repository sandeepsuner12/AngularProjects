import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/classes/pacakge.model';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-book-pacakge',
  templateUrl: './book-pacakge.component.html',
  styleUrls: ['./book-pacakge.component.css']
})
export class BookPacakgeComponent implements OnInit{
  // pacakgeId! :number;
  // bookingForm! : FormGroup;
  // ticketOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // pacakgeForBooking! : Package;


  // constructor(private apiService: ApiService,private router: Router ,private activatedRoute : ActivatedRoute) { 
   
  // }


  // ngOnInit(): void {
  //   this.bookingForm = new FormGroup({
  //     ticketsNumber: new FormControl('',Validators.required),
  //     paymentConfirmation: new FormControl('',Validators.required)
  //   })
  //   this.activatedRoute.params.subscribe(params=>{
  //     this.pacakgeId=params['id'];
  //   })

  //   this.apiService.getPacakageWithId(this.pacakgeId).subscribe(data=>{
  //     this.pacakgeForBooking=data;
  //   });
  // }

  pacakgeId! :number;
  bookingForm! : FormGroup;
  ticketOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pacakgeForBooking! : Package;
  username! : string;

  bookingTicket! : any;
  // ={
//     "numberOfPerson":7,
//     "startDate":"12/02/2024",
//     "username":"Riya",
//     "packageid":4
// }


  constructor(private apiService: ApiService,
    private router: Router ,
    private activatedRoute : ActivatedRoute,
    private authservice : AuthService) { 
   
  }


  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      ticketsNumber: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required),
      paymentConfirmation: new FormControl('',Validators.required)
    })
    this.activatedRoute.params.subscribe(params=>{
      this.pacakgeId=params['id'];
    })

    this.username=this.authservice.getUserName();

    this.apiService.getPacakageWithId(this.pacakgeId).subscribe(data=>{
      this.pacakgeForBooking=data;
    });

  }

  handleClick(){

  
  if(this.bookingForm.valid){
    this.bookingTicket={
      "numberOfPerson":this.bookingForm.controls["ticketsNumber"].value,
      "startDate":this.bookingForm.controls["startDate"].value,
      "username":this.username,
      "packageid":this.pacakgeId  
}
console.log(this.bookingTicket);
    this.apiService.bookTicket(this.bookingTicket).subscribe(data=>{
        if(data.username){
          alert(" ticket Booked ")
        }
        else{
          alert("Something Went Worng ")
        }
    });
  }



    console.log(this.bookingForm.controls["startDate"].value)
  }


}
