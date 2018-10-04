import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '../services/auth.guard';

import { ProfileComponent } from '../components/profile/profile.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { ViewUsersComponent } from '../components/user/view-user/view-user.component';
import { AddNewUserComponent } from '../components/user/add-new-user/add-new-user.component';
import { UserAccountComponent } from '../components/user/user-account/user-account.component';
import { EditUserComponent } from '../components/user/edit-user/edit-user.component';
const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'',component:HomeComponent},
  {path:'viewuser',component:ViewUsersComponent,canActivate: [AuthGuard]},
  {path:'addnewuser',component:AddNewUserComponent},
  {path:'edituser',component:EditUserComponent,canActivate: [AuthGuard]},
  {path:'user-account',component:UserAccountComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
