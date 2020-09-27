import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { RouteResolveService } from './route-resolve.service';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    resolve: { userData:RouteResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
