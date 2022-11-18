import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
   accountForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.accountForm=this.fb.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      title:[null],
      phoneNumber:[null,[Validators.required]],
      companyName:[null],
      companyWebsite:[null],
      companyIndustry:['select',[Validators.required]],
    })
  }
  get f(){
    return this.accountForm.controls
  }
  onSubmit(){
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
      this.accountForm.reset()
      
      
    } else {
      console.log("invalid form");
      
    }

  }

}
