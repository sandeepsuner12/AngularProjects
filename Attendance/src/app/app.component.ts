import { Component, Input , OnDestroy } from '@angular/core';
import { StudentService } from './student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Attendance';
  attendancDashborad:boolean = false;
 
  presentStudentNames : string []=[];
  studentSubscription : Subscription;

  constructor(public studentService : StudentService){
    
    this.studentSubscription = this.studentService.getPresentDetails().subscribe(name =>{
      if(name)
      this.presentStudentNames.push(name);})  
    }
  ngOnDestroy(): void {
    if(this.studentSubscription)
    {
      this.studentSubscription.unsubscribe();
    };
  }
/*
  refresh(){
    this.presentStudentNames = this.studentService.getPresentDetails(); 
  }
  */
  


}
