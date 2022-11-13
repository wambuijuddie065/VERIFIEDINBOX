import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-email-validator',
  templateUrl: './single-email-validator.component.html',
  styleUrls: ['./single-email-validator.component.css']
})
export class SingleEmailValidatorComponent implements OnInit {
   emailForm!:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.emailForm=new FormGroup({
      email:new FormControl(null,[Validators.email])
    })
  }
  get f(){
    return this.emailForm.controls
  }
  onSubmit(){
    if (this.emailForm.valid) {
      console.log(this.emailForm.value);
      alert("Email successfully sent")
      this.emailForm.reset()
     
      
     
      
      
    } else {
      console.log("invalid details");
      
    }

  }

}
