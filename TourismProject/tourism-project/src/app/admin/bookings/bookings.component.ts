import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  // bookings!=any[];
//  bookings:any[] =[['GJ123','Rama','rama@gamil.com','Madhya Predesh', 10,'10-12-2023']];
//  bookings:any;

//  constructor(private apiService : ApiService){

  

//  }
//   ngOnInit(): void {
//     this.apiService.getAllBookings().subscribe(data=>{
//       console.log(data)
//       this.bookings=data;
//     });
//   }

// bookings:any[] =[['GJ123','Rama','rama@gamil.com','Madhya Predesh', 10,'10-12-2023']];
bookings!:any[];
 filterForm! : FormGroup;

 constructor(private apiService : ApiService){

  

 }
  ngOnInit(): void {

    // console.log(this.bookings);
    this.filterForm = new FormGroup({
      startDate: new FormControl('',Validators.required),
      endDate: new FormControl('',Validators.required),
      
    })

    this.apiService.getAllBookings().subscribe(data=>{
      this.bookings=data;
      // console.log(data);
    });
  }

  serach(){
    console.log(this.filterForm.controls['startDate'].value);
    console.log(this.filterForm.controls['endDate'].value);
  }


}
