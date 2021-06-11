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


  data :any;
  modeldata:any;
  editData = "disabled"
  // emps:any = {id:2,name:"mahmoud",email:"mahmoudsalah088@gmail.com",salary:20000}

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
    // this.srv.getEmployeetDetails().subscribe(
    //   res => {
    //     console.log(res);

    //     this.data  = res as PaymentDetails;
    //   },
    //   err => {
    //       console.log(err);
    //   }
    // );
  }


  logform = this.fb.group({
    Name: this.fb.control("",[Validators.required,Validators.minLength(5)]) ,
    Email : this.fb.control("",[Validators.required,Validators.minLength(3)]),
    Salary : this.fb.control("",[Validators.required,Validators.minLength(5)]),

  })

  onSubmit(){

    this.srv.formData.name = this.logform.controls.Name.value;
    this.srv.formData.email = this.logform.controls.Email.value;
    this.srv.formData.salary = this.logform.controls.Salary.value;

    this.srv.postEmployeetDetails().subscribe(
      res => {
        this.logform.reset("");
      },
      err => {
          console.log(err);
      }
    )

    console.log(this.logform.value);
    console.log(this.logform);
  }


  deleteEmp(id){
    this.srv.DeleteEmployeetDetails(id).subscribe(
      res => {
              console.log(res);
            },
            err => {
                console.log(err);
            }
    )
  }


  presentEmpData(){
    this.srv.getEmployeetDetails().subscribe(
      res => {
        console.log(res);

        this.data  = res as PaymentDetails;
      },
      err => {
          console.log(err);
      }
    );
  }
  EditEmpData(id,emp){
    //this.editData="";

  debugger
  console.log("EditEmpData "+ id);
    this.srv.editEmployeetDetails(id,emp).subscribe(
      res => {
        console.log(res);
      },
      err => {
          console.log(err);
      }
    );
  }


  editModelData(id){
    console.log(id);

    // this.modeldata = data.email
    // this.modeldata = data.salary
  }
x:any;
  eitInModel(emp){
      this.x = emp
  }

  show = false;




  // enableEdit(){}
  // saveSegment(){}
  // enableEditMethod(){}











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
