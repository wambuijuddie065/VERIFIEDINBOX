import { Component, OnInit } from '@angular/core';
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
  constructor(private fileUploadService:FileUploadService){ }
  ngOnInit(): void {
    
  }


 
  onChange(event:any){
 this.file=event?.target.files[0]
  }
  onUpload(){
    this.loading=!this.loading
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === 'object') {
  
        this.shortLink = event.link;

        this.loading = false; 
    }

    })
  }

}
