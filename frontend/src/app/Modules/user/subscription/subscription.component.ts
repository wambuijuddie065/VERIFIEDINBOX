import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/Services/checkout.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  paymentHandler: any = null;

  success: boolean = false
  
  failure:boolean = false
  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
    this.invokeStripe()
  }
  makePayment(amount:number){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51M3Ev6JDFSNuGHIxHGVKe0XlAaFEy2sQbuoMP2K4PUZf6MYq4cskKl7aeyyqODtHUeWivenntw2NQtC7eWrM5Aw700yBl6SARH',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      })

  }
  paymentHandler.open({
    name: 'Verified Profile',
    description: 'Validate your emails',
    amount: amount * 100,
  });}
  invokeStripe(){
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51M3Ev6JDFSNuGHIxHGVKe0XlAaFEy2sQbuoMP2K4PUZf6MYq4cskKl7aeyyqODtHUeWivenntw2NQtC7eWrM5Aw700yBl6SARH',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }

  }

}
