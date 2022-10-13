import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-option',
  templateUrl: './account-option.component.html',
  styleUrls: ['./account-option.component.css']
})
export class AccountOptionComponent implements OnInit {
  isUpdateOpen:boolean=true
  isMailOpen:boolean=false
  isPasswordOpen:boolean=false
  isTimeOpen:boolean=false
  isNotificationOpen:boolean=false
  isDeleteOpen:boolean=false
  isUserOpen:boolean=false
  isContactOpen:boolean=false
  isDownloadOpen:boolean=false
  isAuthOpen:boolean=false
  isAssumptionOpen:boolean=false


  constructor() { }

  ngOnInit(): void {
  }
  toggleUpdate(){
    this.isUpdateOpen=true
  }
  untoggleUpdate(){
    this.isUpdateOpen=false

  }
  toggleMail(){
    this.isMailOpen=true
  }
  untoggleMail(){
    this.isMailOpen=false

  }
  togglePassword(){
    this.isPasswordOpen=true
  }
  untogglePassword(){
    this.isPasswordOpen=false

  }
  toggleTime(){
    this.isTimeOpen=true
  }
  untoggleTime(){
    this.isTimeOpen=false

  }
  toggleNotification(){
    this.isNotificationOpen=true
  }
  untoggleNotification(){
    this.isNotificationOpen=false

  }
  toggleDelete(){
    this.isDeleteOpen=true
  }
  untoggleDelete(){
    this.isDeleteOpen=false

  }
  toggleUser(){
    this.isUserOpen=true
  }
  untoggleUser(){
    this.isUserOpen=false

  }
  toggleContact(){
    this.isContactOpen=true
  }
  untoggleContact(){
    this.isContactOpen=false

  }
  toggleDownload(){
    this.isDownloadOpen=true
  }
  untoggleDownload(){
    this.isDownloadOpen=false

  }
  toggleAuth(){
    this.isAuthOpen=true
  }
  untoggleAuth(){
    this.isAuthOpen=false

  }
  toggleAssumption(){
    this.isAssumptionOpen=true
  }
  untoggleAssumption(){
    this.isAssumptionOpen=false

  }


}
