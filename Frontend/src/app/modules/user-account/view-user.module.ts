import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { ViewUsersComponent } from '../../components/user/view-user/view-user.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
 ],
  declarations: [
    ViewUsersComponent
  ],
  exports:[
    ViewUsersComponent
  ]
})
export class ViewUserModule { }
