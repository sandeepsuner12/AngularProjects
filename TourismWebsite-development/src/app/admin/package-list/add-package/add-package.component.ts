import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/classes/pacakge.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  addPacakgeForm! : FormGroup;
  package! : Package;
  addPacakgeStatus! : any;
  
  constructor(private apiService : ApiService,private readonly router : Router , private readonly activatedRoute : ActivatedRoute){}
  
  
  ngOnInit(): void {
    this. addPacakgeForm = new FormGroup({
      id: new FormControl('',Validators.required),
      location: new FormControl('', Validators.required),
      days: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imgUrl :  new FormControl('', Validators.required),
    })
  }

  addPackage(){
    console.log(this. addPacakgeForm);
    this.package = new Package(
      this.addPacakgeForm.controls['id'].value,
      this.addPacakgeForm.controls['location'].value,
      this.addPacakgeForm.controls['days'].value,
      this.addPacakgeForm.controls['cost'].value,
      this.addPacakgeForm.controls['description'].value,
      this.addPacakgeForm.controls['imgUrl'].value
    );
    console.log(this.package);

    this.apiService.addPackage(this.package).subscribe(status=>{
      this.addPacakgeStatus=status;
      this.router.navigate(['../'],{relativeTo:this.activatedRoute})
    });

    
  }

}
