import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // isUserLogin: boolean =true;
  // title = 'tourism-project';
  isUserLogin: boolean =false;
  title = 'tourism-project';
  userName! :string;
  constructor(private authService : AuthService,private readonly router :Router){

  }
  ngOnInit(): void {
    this.authService.getIsUserSubsccription().subscribe(isUser =>{
      this.isUserLogin = isUser
    });
    this.userName=this.authService.getUserName();
  }

  logOut(){
     sessionStorage.clear();
     this.authService.logoutUser();
    //  this.router.navigate(['']);
     
  }
}
