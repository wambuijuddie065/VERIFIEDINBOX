import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {

  @Input()  
   
    fileName = '';  
    uploadDivOpen:boolean=false
 
  constructor(private router:Router,private http: HttpClient){ }
  ngOnInit(): void {
  
    
    
  }
  onDisplayDiv(){
    this.uploadDivOpen=true
  }
  onCloseDiv(){
    this.uploadDivOpen=false
  }
  onChange(event:Event){
    // const file:File = event.target.files[0];

  }
  
  
    
 
    
  
 
 


 


}
