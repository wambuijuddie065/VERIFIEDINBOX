import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoiceForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.invoiceForm=this.fb.group({
      vat:[null,[Validators.required]],
      bill:[null,[Validators.required]]
    })
  }
  get f(){
    return this.invoiceForm.controls
  }
  onSave(){
    if (this.invoiceForm.valid) {
      alert('Info saved successfully');
      console.log(this.invoiceForm.value);
      
      this.invoiceForm.reset()
      
      
    } else {
      console.log('invalid form');
      
      
    }

  }

}
