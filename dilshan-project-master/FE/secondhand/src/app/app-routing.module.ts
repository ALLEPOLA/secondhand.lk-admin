import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminAdReviewComponent } from './admin-ad-review/admin-ad-review.component';
import { AdminBlockedAdsComponent } from './admin-blocked-ads/admin-blocked-ads.component';
import { AdminAcceptAdsComponent } from './admin-accept-ads/admin-accept-ads.component';
import { AdCategoryAnalysisComponent } from './ad-category-analysis/ad-category-analysis.component';
import { AdStatusAnalysisComponent } from './ad-status-analysis/ad-status-analysis.component';
import { DailyAdCountChartComponent } from './daily-ad-count-chart/daily-ad-count-chart.component';
import { ChatComponent } from './chat/chat.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserComplaintsComponent } from './user-complaints/user-complaints.component';
import { UserRatingsComponent } from './user-ratings/user-ratings.component';
import { AdCountByLocationComponent } from './ad-count-by-location/ad-count-by-location.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OtpenterComponent } from './otpenter/otpenter.component';
import { ProfilesettingComponent } from './profilesetting/profilesetting.component';
import { AdminLayoutPageComponent } from './admin-layout-page/admin-layout-page.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'change-password', component: AdminChangePasswordComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'enterotp', component: OtpenterComponent },
  {
    path: 'admin', component: AdminLayoutPageComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'newads', component: AdminAdReviewComponent },
      { path: 'blockedads', component: AdminBlockedAdsComponent },
      { path: 'acceptedads', component: AdminAcceptAdsComponent },
      { path: 'adcategoryanalysis', component: AdCategoryAnalysisComponent },
      { path: 'adstatusanalysis', component: AdStatusAnalysisComponent },
      { path: 'dailyadcount', component: DailyAdCountChartComponent },
      { path: 'userrating', component: UserRatingsComponent },
      { path: 'adcountbylocation', component: AdCountByLocationComponent },
      {
        path: 'systemanalysis', children: [
          { path: '', redirectTo: 'adcategoryanalysis', pathMatch: 'full' }, // Default to adcategoryanalysis
          { path: 'adcategoryanalysis', component: AdCategoryAnalysisComponent },
          { path: 'adstatusanalysis', component: AdStatusAnalysisComponent },
          { path: 'dailyadcount', component: DailyAdCountChartComponent },
          { path: 'userrating', component: UserRatingsComponent },
          { path: 'adcountbylocation', component: AdCountByLocationComponent },
        ]
      },
      { path: 'chat', component: ChatComponent },
      { path: 'usercomplaints', component: UserComplaintsComponent },
      { path: 'profilesetting', component: ProfilesettingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
