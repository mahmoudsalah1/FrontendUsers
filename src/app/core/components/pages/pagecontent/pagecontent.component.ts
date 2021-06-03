import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PaymentDetails } from 'src/app/shared/services/payment-details';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})

export class PagecontentComponent implements OnInit {

  constructor(public srv : PaymentDetailsService ,private fb : FormBuilder , private jwtHelper: JwtHelperService) { }

  data : PaymentDetails[];

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  public logOut = () => {
    localStorage.removeItem("jwt");
  }


  ngOnInit(): void {
  }

  // logform = this.fb.group({
  //   Name: this.fb.control("",[Validators.required,Validators.minLength(5)]) ,
  //   PhoneNum : this.fb.control("",[Validators.required,Validators.minLength(3)])
  // })

  // onSubmit(){

  //   this.srv.formData.name = this.logform.controls.Name.value;
  //   this.srv.formData.phoneNum = this.logform.controls.PhoneNum.value;

  //   this.srv.postPaymentDetails().subscribe(
  //     res => {
  //       this.logform.reset("");
  //     },
  //     err => {
  //         console.log(err);
  //     }
  //   )

  //   console.log(this.logform.value);
  //   console.log(this.logform);
  // }


  }
