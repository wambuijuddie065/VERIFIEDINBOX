import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentOptionsComponent } from 'src/app/payment-options/payment-options.component';
import { AccountOptionComponent } from './account-option/account-option.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AIScoringDownloadComponent } from './ai-scoring-download/ai-scoring-download.component';
import { AIScoringUploadComponent } from './ai-scoring-upload/ai-scoring-upload.component';
import { ApiCallbackStatusComponent } from './api-callback-status/api-callback-status.component';
import { APIKeysComponent } from './api-keys/api-keys.component';
import { AutopayComponent } from './autopay/autopay.component';
import { BillingComponent } from './billing/billing.component';
import { BlacklistMonitoringComponent } from './blacklist-monitoring/blacklist-monitoring.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangeTimeZoneComponent } from './change-time-zone/change-time-zone.component';
import { ChangeYourPasswordComponent } from './change-your-password/change-your-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DownloadResultsComponent } from './download-results/download-results.component';
import { EmailServerTesterComponent } from './email-server-tester/email-server-tester.component';
import { GDPRInformationComponent } from './gdpr-information/gdpr-information.component';
import { InboxPlacementTesterComponent } from './inbox-placement-tester/inbox-placement-tester.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ManageContactListsComponent } from './manage-contact-lists/manage-contact-lists.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { PayAsYouGoComponent } from './pay-as-you-go/pay-as-you-go.component';
import { SingleEmailValidatorComponent } from './single-email-validator/single-email-validator.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ToolsSubscriptionComponent } from './tools-subscription/tools-subscription.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { YourApiKeysComponent } from './your-api-keys/your-api-keys.component';

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
          {path:'pay-as-you-go',component:PayAsYouGoComponent},
          {path:'subscription',component:SubscriptionComponent},
          {path:'autopay',component:AutopayComponent},
          {path:'inbox-placement-tester',component:InboxPlacementTesterComponent},
          {path:'email-server-tester',component:EmailServerTesterComponent},
          {path:'blacklist-monitoring',component:BlacklistMonitoringComponent},
          {path:'tools-subscription',component:ToolsSubscriptionComponent},
          {path:'billing',component:BillingComponent},
          {path:'invoices',component:InvoicesComponent},
          {path:'GDPR-information',component:GDPRInformationComponent},
          {path:'account-option',component:AccountOptionComponent},
          {path:'change-email',component:ChangeEmailComponent},
          {path:'account-profile',component:AccountProfileComponent},
          {path:'delete-account',component:DeleteAccountComponent},
          {path:'your-api-keys',component:YourApiKeysComponent},
          {path:'api-callback-status',component:ApiCallbackStatusComponent},
          {path:'change-password',component:ChangeYourPasswordComponent},
          {path:'notification-settings',component:NotificationSettingsComponent},
          {path:'change-time-zone',component:ChangeTimeZoneComponent},
          {path:'manage-users',component:ManageUsersComponent},
          {path:'manage-contact-lists',component:ManageContactListsComponent},
          {path:'payment-options',component:PaymentOptionsComponent}
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
