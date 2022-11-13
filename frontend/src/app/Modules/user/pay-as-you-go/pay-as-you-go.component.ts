import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-pay-as-you-go',
  templateUrl: './pay-as-you-go.component.html',
  styleUrls: ['./pay-as-you-go.component.css']
})
export class PayAsYouGoComponent implements OnInit {

  constructor() {
    render({
      id:"#paypalBtn",
      currency:"USD",
      value:"100.00",
      onApprove(details) {
        alert("Transaction successfull")
        
      },
    })
   }

  ngOnInit(): void {
  }
  makePayment(amount:number){

  }

}
