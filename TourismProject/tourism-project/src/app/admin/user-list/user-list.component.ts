import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: any[];
  constructor(private apiSerivce : ApiService){

  }
  ngOnInit(): void {
    this.apiSerivce.getAllUsers().subscribe(data=>{
      this.users=data;
      
    });
    
   
  }

  // users: any[]=[["Ram","Sharma","ramsharma12@gmail.com","India","Male"],
  // ["Ram","Sharma","ramsharma12@gmail.com","India","Male"],
  // ["Ram","Sharma","ramsharma12@gmail.com","India","Male"],
  // ["Ram","Sharma","ramsharma12@gmail.com","India","Male"],
  // ["Ram","Sharma","ramsharma12@gmail.com","India","Male"],
  // ["Ram","Sharma","ramsharma12@gmail.com","India","Male"],
  // ["Ramesh","Sha","arm2@gmail.com","India","Male"]]

}
