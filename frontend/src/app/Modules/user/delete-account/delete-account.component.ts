import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
form!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      password:new FormControl(null,[Validators.required])
    })
  }
  get f(){
return this.form.controls
  }
  onSubmit(){
    if (this.form.valid) {
      console.log(this.form.value);
      
      
    } else {
      console.log("invalid form");
      
    }

  }

}
