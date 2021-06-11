import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { }

  formData : PaymentDetails = new PaymentDetails();
  // retrievedData : PaymentDetails[];

  readonly baseaUrl = "http://localhost:45974/api/Employees";



  postEmployeetDetails() {

    return this.http.post(this.baseaUrl, this.formData);

  }

  getEmployeetDetails() {

    return this.http.get(this.baseaUrl);
  }

  editEmployeetDetails(id,emp) {

    return this.http.put(`${this.baseaUrl}/${id}`,emp);
  }


  DeleteEmployeetDetails(id: number) {

    return this.http.delete(`${this.baseaUrl}/${id}`);

  }







  // postPaymentDetails(){

  //   return this.http.post( this.baseaUrl , this.formData);

  // }

  // getPaymentDetails(){

  //   return this.http.get(this.baseaUrl);
  // }

  // DeletePaymentDetails(id:number){

  //   return this.http.delete(`${this.baseaUrl}/${id}`);
  // }

}
