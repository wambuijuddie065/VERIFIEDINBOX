import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8)
        ],
      ],
    });
  }
  get f (){
    return this.loginForm.controls
  }
  onLogin(){
    if (this.loginForm.valid) {
      console.log('Logged in successfully');
      console.log(this.loginForm.value);
      
      this.loginForm.reset()
      
      
    } else {
      console.log('Invalid form');
      console.log(this.loginForm.value);
      
      
      
    }
  }
}
