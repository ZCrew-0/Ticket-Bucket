import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { UserAccountComponent } from '../../components/user/user-account/user-account.component';
import { HeaderBarModule } from '../header-bar/header-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule
    
    
 ],
  declarations: [
    UserAccountComponent
    
    
  ],
  exports:[
    UserAccountComponent
  ]
})
export class UserAccountModule { }
