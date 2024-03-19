import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipes-forms',
  templateUrl: './pipes-forms.component.html',
  styleUrls: ['./pipes-forms.component.css']
})
export class PipesFormsComponent implements OnInit{
  show : boolean =false;
  name: string = '';
  amount : number = 0.129;
  amount2 : number = 111.557;
  genders : string[]=['Male','Female','Other']
  states : string[] = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

  currentDate = new Date();

  signUpForm! : FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName :new FormControl('',Validators.required),
      lastName :new FormControl('',Validators.required),
      email :new FormControl('',[Validators.email,Validators.required]),
      phoneNo :new FormControl('',[Validators.pattern('[0-9]{10}'),Validators.required]),
      gender :new FormControl('',Validators.required),
      city :new FormControl('',Validators.required),
      state :new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      
    })
  }

  submitFlag:boolean=false;

  submitForm(){
    
    
    if(this.signUpForm.status==="INVALID" ){
      this.submitFlag=true;
      console.log(this.signUpForm)
      let pos = window.scrollY;
      window.scroll({ 
        top: pos-300, 
        left: 0, 
        behavior: 'smooth' 
       })
    }
    else{
      alert("Successfully Submited");
      console.log("done")
    }
   
  }



}
