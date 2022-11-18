import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-your-password',
  templateUrl: './change-your-password.component.html',
  styleUrls: ['./change-your-password.component.css']
})
export class ChangeYourPasswordComponent implements OnInit {

  passwordForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm=this.fb.group({
      oldPassword:[null,Validators.minLength(6)],
      newPassword:[null,Validators.minLength(6)],
      confirmPassword:[null,Validators.minLength(6)]
    })
  }
  get f(){
    return this.passwordForm.controls
  }
  onSubmit(){
    if (this.passwordForm.valid) {
      console.log(this.passwordForm.value);
      this.passwordForm.reset()
      
      
    } else {
      console.log("error");
      
    }
  }
}
