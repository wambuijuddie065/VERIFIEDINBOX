import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { DownloadResultsComponent } from './download-results/download-results.component';
import { SingleEmailValidatorComponent } from './single-email-validator/single-email-validator.component';
import { IntegrationsComponent } from './integrations/integrations.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountInfoComponent,
    WelcomeComponent,
    UploadProfileComponent,
    DownloadResultsComponent,
    SingleEmailValidatorComponent,
    IntegrationsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule
  ]
})
export class UserModule { }
