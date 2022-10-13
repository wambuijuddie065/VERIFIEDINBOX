import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gdpr-information',
  templateUrl: './gdpr-information.component.html',
  styleUrls: ['./gdpr-information.component.css']
})
export class GDPRInformationComponent implements OnInit {
  acceptForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.acceptForm=this.fb.group({
      acceptTerms:[false,Validators.requiredTrue]
    })


  }
  onAccept(){
    if (this.acceptForm.invalid) {
      return;
  }

  alert('You Have Accepted the Agreement' );
  this.acceptForm.reset()

  }

}
