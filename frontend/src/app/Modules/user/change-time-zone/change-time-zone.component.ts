import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-time-zone',
  templateUrl: './change-time-zone.component.html',
  styleUrls: ['./change-time-zone.component.css']
})
export class ChangeTimeZoneComponent implements OnInit {


 
 timeForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.timeForm=new FormGroup({
      timeZone:new FormControl('select',[Validators.required])
  })
  }
  get f(){
    return this.timeForm.controls
  }
  onSubmit(){
    if (this.timeForm.valid) {
      console.log(this.timeForm.value);
      this.timeForm.reset()
      
      
    } else {
      console.log("error");
      
    }
  }

}
