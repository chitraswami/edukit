import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit{
  signupForm!: FormGroup;
  message:string = '';
  className = 'd-none'
  isProcess:boolean = false;

  constructor (private fb:FormBuilder, private auth:AuthService ) {
    this.signupForm = this.fb.group({
      'displayName':['', Validators.required],
      'email':['', Validators.required],
      'lastname':['', Validators.required],
      'password':['', Validators.required]
    })
  }

  ngOnInit(): void {

  }
  signup() {
    const data = this.signupForm.value;
    delete data['confirm'];
    this.auth.signup(data).subscribe(res=>
      {
        if(res.success){
          this.isProcess = false;
          this.message = "Account has been created";
          this.className = 'alert alert-success';
        }else{
          this.isProcess = false;
          this.message = res.message;
          this.className= 'alert alert-danger';
        }
      }, err => {
        this.isProcess = false;
          this.message = "Server Error";
          this.className= 'alert alert-danger';
      })
  }

}
