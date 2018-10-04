import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user-service/user.service';
import { User } from '../../../services/user-service/user.model';

declare var M: any;

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
  providers: [UserService]
})
export class ViewUsersComponent implements OnInit {


  constructor(public userAgentService:UserService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userAgentService.selectedUser = {
      _id:"",
    fname:"",
    lname:"",
    username:"",
    password:"",
    email:"",
    telephone:[""],
    address:"",
    profilepic:"",
    isadmin:false
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.userAgentService.postUser(form.value).subscribe((res) => {
        this.flashMessage.show('Travel Agent Saved', { cssClass: 'alert-success', timeout: 4000 });
        this.refreshUserList();
        this.resetForm(form);
        console.log("Saved");
      });
    }
    else {
      this.userAgentService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();
        this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
        console.log("Updated");
      });
    }
  }

  refreshUserList() {
    this.userAgentService.getUserList().subscribe((res) => {
      this.userAgentService.user = res as User[];
    });
  }

  onEdit(user: User) {
    this.userAgentService.selectedUser = user;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userAgentService.deleteUser(_id).subscribe((res) => {
        this.refreshUserList();
      });
    }
  }
}
  
