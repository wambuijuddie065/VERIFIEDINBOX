import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadResultsComponent } from './download-results/download-results.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { SingleEmailValidatorComponent } from './single-email-validator/single-email-validator.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'welcome', component: WelcomeComponent },
          { path: 'upload-profile', component: UploadProfileComponent },
          { path: 'download-results', component: DownloadResultsComponent },
          {
            path: 'single-email-validator',
            component: SingleEmailValidatorComponent,
          },
          {path:'integrations',component:IntegrationsComponent}
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
