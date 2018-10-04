import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { AddNewUserComponent } from '../../components/user/add-new-user/add-new-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
  ],
  declarations: [
    AddNewUserComponent
  ],
  exports:[
    AddNewUserComponent
  ]
})
export class SignupModule { }
