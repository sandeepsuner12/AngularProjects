import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  presentStudents = new BehaviorSubject<any>(null);

  constructor() { }
  getPresentDetails(){
    console.log(this.presentStudents)
    return this.presentStudents;
  }

  markPresent(nameOfStudent : string){
    //this.presentStudents.push(nameOfStudent);
    this.presentStudents.next(nameOfStudent)
    //console.log(nameOfStudent);
  }
}
