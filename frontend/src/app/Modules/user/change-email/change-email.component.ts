import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {
  emailForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.emailForm=this.fb.group({
      newEmail:[null,Validators.email],
      verifyEmail:[null,Validators.email]
    })
  }
  get f(){
    return this.emailForm.controls
  }
  onSubmit(){
    if (this.emailForm.valid) {
      console.log(this.emailForm.value);
      
      
    } else {
      console.log("error");
      
    }
  }

}
