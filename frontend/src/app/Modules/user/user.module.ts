import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule
  ]
})
export class UserModule { }
