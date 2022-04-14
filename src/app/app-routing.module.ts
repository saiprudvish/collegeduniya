import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [  {path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'home/:code',component:DetailsComponent},
{path:'profile',component:ProfileComponent},
{path:'', redirectTo:'/login',pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
