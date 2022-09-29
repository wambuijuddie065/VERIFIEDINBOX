import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
  ],
  exports:[
    HomepageComponent
  ]
})
export class SharedModule { }
