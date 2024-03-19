import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsTransferService {

  constructor() { }
  registrationDetails! : any[];

  getDetails(){
    return this.registrationDetails;
  }
  setDeatils(record : any[]){
    this.registrationDetails=record;
  }
}
