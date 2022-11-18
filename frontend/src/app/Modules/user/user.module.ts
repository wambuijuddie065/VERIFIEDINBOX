import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { DownloadResultsComponent } from './download-results/download-results.component';
import { SingleEmailValidatorComponent } from './single-email-validator/single-email-validator.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { APIKeysComponent } from './api-keys/api-keys.component';
import { AIScoringUploadComponent } from './ai-scoring-upload/ai-scoring-upload.component';
import { AIScoringDownloadComponent } from './ai-scoring-download/ai-scoring-download.component';
import { PayAsYouGoComponent } from './pay-as-you-go/pay-as-you-go.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AutopayComponent } from './autopay/autopay.component';
import { InboxPlacementTesterComponent } from './inbox-placement-tester/inbox-placement-tester.component';
import { EmailServerTesterComponent } from './email-server-tester/email-server-tester.component';
import { BlacklistMonitoringComponent } from './blacklist-monitoring/blacklist-monitoring.component';
import { ToolsSubscriptionComponent } from './tools-subscription/tools-subscription.component';
import { BillingComponent } from './billing/billing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { GDPRInformationComponent } from './gdpr-information/gdpr-information.component';
import { AccountOptionComponent } from './account-option/account-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { YourApiKeysComponent } from './your-api-keys/your-api-keys.component';
import { ApiUsageDashboardComponent } from './api-usage-dashboard/api-usage-dashboard.component';
import { ApiCallbackStatusComponent } from './api-callback-status/api-callback-status.component';
import { ChangeYourPasswordComponent } from './change-your-password/change-your-password.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { ChangeTimeZoneComponent } from './change-time-zone/change-time-zone.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageContactListsComponent } from './manage-contact-lists/manage-contact-lists.component';



@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    UploadProfileComponent,
    DownloadResultsComponent,
    SingleEmailValidatorComponent,
    IntegrationsComponent,
    APIKeysComponent,
    AIScoringUploadComponent,
    AIScoringDownloadComponent,
    PayAsYouGoComponent,
    SubscriptionComponent,
    AutopayComponent,
    InboxPlacementTesterComponent,
    EmailServerTesterComponent,
    BlacklistMonitoringComponent,
    ToolsSubscriptionComponent,
    BillingComponent,
    InvoicesComponent,
    GDPRInformationComponent,
    AccountOptionComponent,
    ChangeEmailComponent,
    AccountProfileComponent,
    DeleteAccountComponent,
    YourApiKeysComponent,
    ApiUsageDashboardComponent,
    ApiCallbackStatusComponent,
    ChangeYourPasswordComponent,
    NotificationSettingsComponent,
    ChangeTimeZoneComponent,
    ManageUsersComponent,
    ManageContactListsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule
  ]
})
export class UserModule { }
