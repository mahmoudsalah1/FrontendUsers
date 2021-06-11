import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  invalidRegister:boolean = false;

  constructor(private fb:FormBuilder , private service : LoginService ,private router:Router) { }

  logform = this.fb.group({
    username : this.fb.control('',[Validators.required,Validators.email]) ,
    Password : this.fb.control('',[Validators.required,Validators.minLength(3)]) ,
    confirmPassword : this.fb.control('',[Validators.required,Validators.minLength(3)]) ,
  })

  registerform(){
    console.log(this.logform.value);
    console.log(this.logform);

    var body = {
      email: this.logform.value.username,
      Password:this.logform.value.Password,
      confirmPassword:this.logform.value.confirmPassword
    }
    // console.log("username is: "+body.username);
    // console.log("pass is: "+body.Password);
    // console.log("confirmpass is: "+body.confirmPassword);

    this.service.registerData(body).subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl("");
        },
        err =>{
          console.log(err);
          this.invalidRegister = true;
        }
    );

  }

  ngOnInit(): void {
  }

}
