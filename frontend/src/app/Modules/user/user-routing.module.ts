import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIScoringDownloadComponent } from './ai-scoring-download/ai-scoring-download.component';
import { AIScoringUploadComponent } from './ai-scoring-upload/ai-scoring-upload.component';
import { APIKeysComponent } from './api-keys/api-keys.component';
import { AutopayComponent } from './autopay/autopay.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadResultsComponent } from './download-results/download-results.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PayAsYouGoComponent } from './pay-as-you-go/pay-as-you-go.component';
import { SingleEmailValidatorComponent } from './single-email-validator/single-email-validator.component';
import { SubscriptionComponent } from './subscription/subscription.component';
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
          {path:'integrations',component:IntegrationsComponent},
          {path:'API_keys',component:APIKeysComponent},
          {path:'AI-scoring-upload',component:AIScoringUploadComponent},
          {path:'AI-scoring-download',component:AIScoringDownloadComponent},
          {path:'Pay-as-you-go',component:PayAsYouGoComponent},
          {path:'subscription',component:SubscriptionComponent},
          {path:'autopay',component:AutopayComponent}
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
