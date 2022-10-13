import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.css']
})
export class APIKeysComponent implements OnInit {
  isKeysOpen:boolean=true
  isUsageOpen:boolean=false
  isCallbackOpen:boolean=false
  isValidationOpen:boolean=false
  isCreditOpen:boolean=false
  isUploadOpen:boolean=false
  isScoringOpen:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  toggleKeys(){
    this.isKeysOpen=true
  }
  untoggleKeys(){
    this.isKeysOpen=false

  }
  toggleUsage(){
    this.isUsageOpen=true
  }
  untoggleUsage(){
    this.isUsageOpen=false

  }
  toggleCallback(){
    this.isCallbackOpen=true
  }
  untoggleCallback(){
    this.isCallbackOpen=false

  }
  toggleValidation(){
    this.isValidationOpen=true
  }
  untoggleValidation(){
    this.isValidationOpen=false

  }
  toggleCredit(){
    this.isCreditOpen=true
  }
  untoggleCredit(){
    this.isCreditOpen=false

  }
  toggleUpload(){
    this.isUploadOpen=true
  }
  untoggleUpload(){
    this.isUploadOpen=false

  }
  toggleScoring(){
    this.isScoringOpen=true
  }
  untoggleScoring(){
    this.isScoringOpen=false

  }

}
