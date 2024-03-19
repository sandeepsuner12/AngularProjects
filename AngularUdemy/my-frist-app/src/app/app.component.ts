import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-frist-app';
  name:string;
  


  clicked(){
  let element = document.getElementById("host");
  
  element.classList.remove("app-warining-alert");

  element.classList.add("app-success-alert");
    

  }
  clickedCancel(){
    let element = document.getElementById("host");
    element.classList.remove("app-success-alert");
  element.classList.add("app-warining-alert");

  }
}
