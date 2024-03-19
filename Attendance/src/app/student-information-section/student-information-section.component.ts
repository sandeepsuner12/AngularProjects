import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-information-section',
  templateUrl: './student-information-section.component.html',
  styleUrls: ['./student-information-section.component.css']
})
export class StudentInformationSectionComponent {

  givenText : string ="Ram Ram";

  studentList=[
    {
      eno : "EN01",
      name : "Sandeep Suner",
      branch :"CSE",
      address : "Indore"
    },
    {
      eno : "EN02",
      name : "Yash Adhakari",
      branch :"CSE",
      address : "Ratlam"
    },
    {
      eno : "EN03",
      name : "Siddhant Singh",
      branch :"CSE",
      address : "Khargon"
    },
    {
      eno : "EN04",
      name : "Sandeep Bhandru",
      branch :"EC",
      address : "Hydrebad"
    },
    {
      eno : "EN05",
      name : "Mudit Sinha",
      branch :"CSE",
      address : "Indore"
    },
  ]
  constructor(public studentService : StudentService){

  }
  
  present(name : string){
    this.studentService.markPresent(name);
  }
 

}
