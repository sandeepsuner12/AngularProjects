import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnChanges {
  @Input() studentInfo : any []=[];
  @Input() givenText : string | undefined;
  @Output() emitStudentName : EventEmitter<string>  = new EventEmitter()
  constructor(public studentService : StudentService){
    console.log("Constructor of StudentComponet")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnchanges of SC" , changes);
  }

  /*present(name : string){
    this.studentService.markPresent(name);
  }*/
  submitName(name:string){
    this.emitStudentName.emit(name);
  }

}
