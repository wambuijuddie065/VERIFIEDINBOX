import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',children:[
    {path:'dashboard',component:DashboardComponent, children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'upload-profile',component:UploadProfileComponent}
      
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
