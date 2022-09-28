import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      fullname:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.minLength(8),Validators.required]],
      confirmPassword:[null,[Validators.minLength(8),Validators.required]],
      contact:[null,[Validators.required]]
    })
  }
  get f (){
    return this.registerForm.controls
  }
  onRegister(){
    if (this.registerForm.valid) {
      console.log('registered successfully');
      console.log(this.registerForm.value);
      this.registerForm.reset()
      
    } else {
      console.log('invalid form');
      
      
    }
  }

}
