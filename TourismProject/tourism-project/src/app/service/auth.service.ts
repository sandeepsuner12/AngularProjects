import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userName!:string;
  isUser = new BehaviorSubject(false);

  constructor() { }


  loginUser(){  
    this.isUser.next(true);
    console.log("logIn called",this.isUser)
  }
  logoutUser(){
    console.log("logout called",this.isUser)
    this.isUser.next(false);
  }

  getUserStatus():boolean{
    return this.isUser.getValue();
  }
  getIsUserSubsccription(){
    return this.isUser
  }
  setUserName(name:string){
    console.log(name);
    this.userName=name;
  }

  getUserName():string{
    return this.userName;
  }

  
}
