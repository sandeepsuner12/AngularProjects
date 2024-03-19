import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CustomCredentials } from '../classes/credentials';
import { AuthService } from '../service/auth.service';
// import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;
  loginForm!: FormGroup;
  isAdmin: any;
  userdata: any;
  credintials! :  CustomCredentials;
  // cr2! :  CustomCredentials;


  constructor(private apiService: ApiService, private readonly router: Router, 
    private readonly activaredRoute: ActivatedRoute,
    private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      isAdmin: new FormControl('')
    })
  }
  ngOnInit() {
  }


  handleLogin() {

    if (this.loginForm.controls['isAdmin'].value) {

      this.credintials = new CustomCredentials(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
      console.log(this.credintials)
      this.apiService.verifyAdminCredinatials(this.credintials).subscribe(data => {
        this.userdata = data;
        if (this.userdata.jwtToken) {
          sessionStorage.setItem('access_token', data.jwtToken)
          // console.log(sessionStorage.getItem("access_token"))
          this.authService.setUserName(data.username);
          this.authService.loginUser();
          this.router.navigate(['../admin'], { relativeTo: this.activaredRoute });
        } else {
          this.invalidLogin = true;
        }
      },
      (error)=>{
        this.invalidLogin = true;
      }
      );
    } else {
       this.credintials = new  CustomCredentials(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value);
      // const user = {
      //   "email": this.loginForm.controls['username'].value,
      //   "password": this.loginForm.controls['password'].value
      // };

      this.apiService.verifyUserCredinatials(this.credintials).subscribe(data => {

        console.log("data in user", data)
        this.userdata = data;
        if (this.userdata.jwtToken) {
          sessionStorage.setItem('access_token', data.jwtToken)
          // console.log(sessionStorage.getItem("access_token"))
          this.authService.setUserName(data.username);
          this.authService.loginUser();
          this.router.navigate(['../user'], { relativeTo: this.activaredRoute });
        } else {
          this.invalidLogin = true;
        }
      },
      (error)=>{
        this.invalidLogin = true;
      }
      );
      console.log("user hai")

    }
  }

}
