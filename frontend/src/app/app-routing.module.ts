import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Modules/shared/homepage/homepage.component';


const routes: Routes = [ {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomepageComponent},
{path:'auth',loadChildren:()=>import('./Modules/auth/auth.module').then((m)=>m.AuthModule)},
{path:'user',loadChildren:()=>import('./Modules/user/user.module').then((m)=>m.UserModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
