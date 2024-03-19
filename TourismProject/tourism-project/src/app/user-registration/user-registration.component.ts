import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  signUpForm: FormGroup;
  // genders:string [] =['Male', 'Female','Others']
  isSubmit:boolean=false;

  

  constructor(private router: Router,private apiService : ApiService){
    this.signUpForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phnumber: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      country: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required) 
  })
  }

  handleSubmit() {
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      delete user.confirmPassword;
      console.log("valid user",user);
      this.apiService.registerUser(user).subscribe(response=>{
        console.log("rsponce",response)

        if(response.id){
          this.router.navigate(['login']);
        }
      });

    //   this.http.post('your-backend-api-endpoint', formData)
    //     .subscribe(
    //       (response) => {
    //         console.log('Backend response:', response);
    //       },
    //       (error) => {
    //         console.error('Error:', error);
    //       }
    //     );
    // } else {
    //   this.signUpForm.markAllAsTouched();
    }
    
    }



}
