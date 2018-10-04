import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { EditUserComponent } from '../../components/user/edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
 ],
  declarations: [
    EditUserComponent
  ],
  exports:[
    EditUserComponent
  ]
})
export class EditUserModule { }
