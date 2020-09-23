import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'profile', 
    component:ProfileComponent
  },
  {
    path:'admin', 
    component:AdminComponent
  },
  {
    path:'user', 
    component:UserComponent
  },
  {
    path:'user-detail', 
    component:UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
