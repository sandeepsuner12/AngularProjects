import { Component, OnInit } from '@angular/core';
import { DetailsTransferService } from 'src/app/services/details-transfer.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  record : any[]=[];
  constructor(public detailsTransferServive : DetailsTransferService){}
  ngOnInit(): void {
    this.record= this.detailsTransferServive.getDetails();
    console.log(this.record)
  }

  getDetails(){
    this.record= this.detailsTransferServive.getDetails();
    console.log(this.record)
  }
  

}
