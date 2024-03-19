import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {  CustomCredentials } from '../classes/credentials';
import { Package } from '../classes/pacakge.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers! : HttpHeaders;


  constructor(private httpClinet : HttpClient) {
    this.headers=new HttpHeaders({
        'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("access_token")
      })

   }

  getHeader(){
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("access_token")
    })
  }

   

  // ________for login Page__________________________
  verifyAdminCredinatials(customcredentials : CustomCredentials): Observable<any>{
    // const credentials = btoa(`${"Ram"}:${"pwdr"}`);

    // // Set up the HttpHeaders with Basic Authentication
    // const headers = new HttpHeaders({
    //   Authorization: `Basic ${credentials}`,
    // });
      // return this.httpClinet.post("http://localhost:8080/testdemo/adminVerify",customcredentials,{ headers });
      return this.httpClinet.post("http://localhost:8080/adminloginverify",customcredentials);
      
  }

  verifyUserCredinatials(customcredentials : CustomCredentials): Observable<any>{
    return this.httpClinet.post("http://localhost:8080/userloginVerify", customcredentials)
 }

 //_________________________________for User Registration//No token
  registerUser(user:any):Observable<any>{

    console.log("api called")
   return this.httpClinet.post("http://localhost:8080/user",user)
  }

//  _______________for package list
 getAllPacakges():Observable<any>{
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + sessionStorage.getItem("access_token")
  // })
  return this.httpClinet.get("http://localhost:8080/packages");
 }



 deletePackageWithId(id : number): Observable<any>{
  let param = new HttpParams().set('id',id);
  this.getHeader()
  return this.httpClinet.delete("http://localhost:8080/admin/package",{params:param, headers: this.headers});
 }

// _________________for user list_____

getAllUsers():Observable<any>{
  this.getHeader();
  return this.httpClinet.get("http://localhost:8080/admin/users", { headers: this.headers })
}

//_______________for pacakage edit

getPacakageWithId(id:number): Observable<any>{

  // console.log("delete API is called",id);
  let param = new HttpParams().set('id',id);
  // let header = new HttpHeaders().append()
  this.getHeader();
  return this.httpClinet.get("http://localhost:8080/admin/package",{params: param, headers: this.headers });
}

updatePackageWithId(pacakge :Package):Observable<any>{
  console.log("Update API is called",pacakge);
  let param = new HttpParams().set('id',pacakge.id);
  this.getHeader();
  return this.httpClinet.put("http://localhost:8080/admin/package",pacakge,{params:param, headers: this.headers });
}

//_________________________for add pacakge
addPackage(pacakage:Package):Observable<any>{
  this.getHeader();
  return this.httpClinet.post("http://localhost:8080/admin/package",pacakage,{ headers: this.headers });
 }

 //_______________________________for bookings pacakges

 getAllBookings():Observable<any>{
  this.getHeader();
  return this.httpClinet.get("http://localhost:8080/booking",{ headers : this.headers});
 }

 //_________________________for user profile _______________________

 getUserByEmail(email:string):Observable<any>{
  let param= new HttpParams().set('email',email);
  this.getHeader();
  return this.httpClinet.get("http://localhost:8080/userbyemail",{params:param,headers :this.headers})
 }

 getTravelHistoryByEmail(email:string):Observable<any>{
  let param= new HttpParams().set('username',email);
  this.getHeader();
  return this.httpClinet.get("http://localhost:8080/user/booking",{params:param, headers:this.headers})
 }

 updatePasswordByeEamil(email:string,password:any):Observable<any>{
  let param= new HttpParams().set('email',email);
  console.log(email,password)
  return this.httpClinet.post("http://localhost:8080/confirmpassword",password,{params:param})
 }

 //----------------------------for forgot password 

 verifyUserEmailandPhNo(user:any):Observable<any>{
  return this.httpClinet.post("http://localhost:8080/forgotpassword",user);
 }

 //--------------------------for booking tickites
 bookTicket(ticket:any):Observable<any>{
  this.getHeader();
  return this.httpClinet.post("http://localhost:8080/booking",ticket,{headers : this.headers});

 }

  
}
