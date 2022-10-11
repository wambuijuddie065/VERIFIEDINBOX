import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; 
  file: File | null=null ;
  constructor(private router:Router){ }
  ngOnInit(): void {
  
    
    
  }
 


 


}
