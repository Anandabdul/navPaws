import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './paws/home/home.component';
import { DonateComponent } from './paws/donate/donate.component';
import { FirstAidComponent } from './paws/first-aid/first-aid.component';
import { RescueComponent } from './paws/rescue/rescue.component';
import { SuccessBlogComponent } from './paws/success-blog/success-blog.component';
import { VolunteerComponent } from './paws/volunteer/volunteer.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'donate', component:DonateComponent},
  {path:'firstAid', component:FirstAidComponent},
  {path:'rescue', component:RescueComponent},
  {path:'successBlog', component:SuccessBlogComponent},
  {path:'volunteer', component:VolunteerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
