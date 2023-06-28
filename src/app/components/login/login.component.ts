import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(): void {
   
  }
  loginForm : FormGroup = new FormGroup({
    email : new FormControl("",[Validators.required, Validators.email]),
    pwd : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)])
  });

  isUserValid: boolean = false;

  loginSubmited(){
    this.authService.loginUser([this.loginForm.value.email, this.loginForm.value.pwd])
    .subscribe(res => {
      if(res == 'Failure'){
        this.isUserValid = false;
        alert("Login Unsuccessfull");
      }
      else{
        this.isUserValid = true;
        this.authService.setToken(res);
        this.router.navigateByUrl('Home');
      }
    });
    // console.log(this.loginForm);
  }

 
  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get PWD() : FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
  

}
