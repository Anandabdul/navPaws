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
import { AdoptComponent } from './paws/adopt/adopt.component';
import { DonateAdminComponent } from './pawsAdmin/donate-admin/donate-admin.component';
import { RescueAdminComponent } from './pawsAdmin/rescue-admin/rescue-admin.component';
import { VolunteerAdminComponent } from './pawsAdmin/volunteer-admin/volunteer-admin.component';
import { PetDataComponent } from './pawsAdmin/pet-data/pet-data.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'donate', component:DonateComponent},
  {path:'firstAid', component:FirstAidComponent},
  {path:'rescue', component:RescueComponent},
  {path:'successBlog', component:SuccessBlogComponent},
  {path:'volunteer', component:VolunteerComponent},
  {path:'adopt', component:AdoptComponent},
  {path:'donateAdmin',component:DonateAdminComponent},
  {path:'rescueAdmin',component:RescueAdminComponent},
  {path:'volunteerAdmin',component:VolunteerAdminComponent},
  {path: 'petData', component:PetDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
