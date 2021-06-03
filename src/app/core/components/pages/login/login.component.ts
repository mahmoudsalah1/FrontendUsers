import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private fb:FormBuilder , public service:LoginService,private router:Router) { }

 invalidLogin:boolean;

  logform = this.fb.group({
    username : this.fb.control('',[Validators.required,Validators.email]) ,
    password : this.fb.control('',[Validators.required,Validators.minLength(3)]) ,
  })

  loginForm(){
    //console.log(this.logform.value);
    //console.log(this.logform);

    var body = {
      email: this.logform.value.username,
      password: this.logform.value.password
    }

    this.service.loginData(body).subscribe(
      response => {
          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigateByUrl("pagecontent");

        }, err => {
          this.invalidLogin = true;
        });


  }


  ngOnInit(): void {
  }

}
