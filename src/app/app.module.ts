import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './paws/home/home.component';
import { RescueComponent } from './paws/rescue/rescue.component';
import { SuccessBlogComponent } from './paws/success-blog/success-blog.component';
import { VolunteerComponent } from './paws/volunteer/volunteer.component';
import { FirstAidComponent } from './paws/first-aid/first-aid.component';
import { DonateComponent } from './paws/donate/donate.component';
import { FormsModule } from '@angular/forms';
import { ForgotPswdComponent } from './user/forgot-pswd/forgot-pswd.component';
import { LogoutComponent } from './user/logout/logout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './paws/navbar/navbar.component';
import { AdoptComponent } from './paws/adopt/adopt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RescueAdminComponent } from './pawsAdmin/rescue-admin/rescue-admin.component';
import { NavBarAdminComponent } from './pawsAdmin/nav-bar-admin/nav-bar-admin.component';
import { DonateAdminComponent } from './pawsAdmin/donate-admin/donate-admin.component';
import { VolunteerAdminComponent } from './pawsAdmin/volunteer-admin/volunteer-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    RescueComponent,
    SuccessBlogComponent,
    VolunteerComponent,
    FirstAidComponent,
    DonateComponent,
    ForgotPswdComponent,
    LogoutComponent,
    NavbarComponent,
    AdoptComponent,
    RescueAdminComponent,
    NavBarAdminComponent,
    DonateAdminComponent,
    VolunteerAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
