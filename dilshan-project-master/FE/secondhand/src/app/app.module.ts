import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './services/chatService';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ProfilesettingComponent } from './profilesetting/profilesetting.component';
import { AdminAdReviewComponent } from './admin-ad-review/admin-ad-review.component';
import { AdminLayoutPageComponent } from './admin-layout-page/admin-layout-page.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSideNavigationComponent } from './admin-side-navigation/admin-side-navigation.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminBlockedAdsComponent } from './admin-blocked-ads/admin-blocked-ads.component';
import { AdminAcceptAdsComponent } from './admin-accept-ads/admin-accept-ads.component';
import { AdCategoryAnalysisComponent } from './ad-category-analysis/ad-category-analysis.component';
import { AdStatusAnalysisComponent } from './ad-status-analysis/ad-status-analysis.component';
import { DailyAdCountChartComponent } from './daily-ad-count-chart/daily-ad-count-chart.component';
import { ChatComponent } from './chat/chat.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserComplaintsComponent } from './user-complaints/user-complaints.component';
import {UserRatingsComponent} from './user-ratings/user-ratings.component';
import { AdCountByLocationComponent } from './ad-count-by-location/ad-count-by-location.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OtpenterComponent } from './otpenter/otpenter.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAdReviewComponent,
    AdminLayoutPageComponent,
    AdminHeaderComponent,
    AdminSideNavigationComponent,
    AdminLoginComponent,
    AdminChangePasswordComponent,
    AdminBlockedAdsComponent,
    AdminAcceptAdsComponent,
    AdCategoryAnalysisComponent,
    AdStatusAnalysisComponent,
    DailyAdCountChartComponent,
    ChatComponent,
    AdminDashboardComponent,
    UserComplaintsComponent,
    UserRatingsComponent,
    AdCountByLocationComponent,
    ForgetpasswordComponent,
    OtpenterComponent,
    ResetpasswordComponent,
    ProfilesettingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule, 
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
