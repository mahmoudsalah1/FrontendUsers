import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  private readonly registerLink = "http://localhost:45974/api/Account/Register";
  private readonly loginLink = "http://localhost:45974/api/Account/Login";


  loginData(data){
    let srv = this.http.post(this.loginLink,data);
    return srv;
  }

  registerData(data){
    let srv = this.http.post(this.registerLink,data);
    return srv;
  }

}
