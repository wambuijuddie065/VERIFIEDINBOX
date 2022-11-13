import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop'

import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {

  @ViewChild('fileInput',{static:false})
  fileInput!:ElementRef 
  itsUpload:boolean=false
   
    fileName:any;  
    // public files:=[]
    uploadDivOpen:boolean=false
    filesArr:Array<any> | NgxFileDropEntry[]=[]
    
 
  constructor(private router:Router,private http: HttpClient){
    this.filesArr=[]
    
   }
  ngOnInit(): void {
  
    
    
  }
  onDisplayDiv(){
    this.uploadDivOpen=true
  }
  onCloseDiv(){
    this.uploadDivOpen=false
  }
  onChange(event:any){
    
    if (event.target.files.length>0) {
      const file:File = event.target.files[0];
      console.log(file);
      this.fileName=file
      
      
      
    }
 

  }
  onUpload(){
    const formData=new FormData()
    formData.append('file',this.fileName)
    this.http.post<any>("http://localhost:3000/file",formData).subscribe((res)=>{
      console.log(res);
      this.fileInput.nativeElement.value=""
      this.filesArr.push(res.path)
      this.itsUpload=true
      
    },err=>{console.log(err);
    })
      
  }
  getOneFile(id:number){
    return this.filesArr.find((f:any)=>f.index==id)

  }
  onRemove(id:number){
  this.filesArr.splice(id,1)
    console.log('remove clicked');
  }
  
    public dropped(files:NgxFileDropEntry[]){
      this.filesArr=files
      this.itsUpload=false
      console.log(files);
      

    }
 
    
  
 
 


 


}
