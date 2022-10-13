import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOptionComponent } from './account-option/account-option.component';
import { AIScoringDownloadComponent } from './ai-scoring-download/ai-scoring-download.component';
import { AIScoringUploadComponent } from './ai-scoring-upload/ai-scoring-upload.component';
import { APIKeysComponent } from './api-keys/api-keys.component';
import { AutopayComponent } from './autopay/autopay.component';
import { BillingComponent } from './billing/billing.component';
import { BlacklistMonitoringComponent } from './blacklist-monitoring/blacklist-monitoring.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadResultsComponent } from './download-results/download-results.component';
import { EmailServerTesterComponent } from './email-server-tester/email-server-tester.component';
import { GDPRInformationComponent } from './gdpr-information/gdpr-information.component';
import { InboxPlacementTesterComponent } from './inbox-placement-tester/inbox-placement-tester.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PayAsYouGoComponent } from './pay-as-you-go/pay-as-you-go.component';
import { SingleEmailValidatorComponent } from './single-email-validator/single-email-validator.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ToolsSubscriptionComponent } from './tools-subscription/tools-subscription.component';
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
          { path: 'upload-file', component: UploadProfileComponent },
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
          {path:'autopay',component:AutopayComponent},
          {path:'inbox-placement-tester',component:InboxPlacementTesterComponent},
          {path:'email-server-tester',component:EmailServerTesterComponent},
          {path:'blacklist-monitoring',component:BlacklistMonitoringComponent},
          {path:'tools-subscription',component:ToolsSubscriptionComponent},
          {path:'billing',component:BillingComponent},
          {path:'invoices',component:InvoicesComponent},
          {path:'GDPR-information',component:GDPRInformationComponent},
          {path:'account-option',component:AccountOptionComponent}
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
