import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsSubscriptionService {

  constructor() { }
   getSubscribed(){
    const url = "http://localhost:3000/subscribe/"
   
   }
  requestSubscription(price:any){
    console.log(price);
    

  }
  redirectToCheckout(sessionId:string){

  }
}
