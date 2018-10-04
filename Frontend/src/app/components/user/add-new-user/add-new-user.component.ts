import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user-service/user.service';
import { User } from '../../../services/user-service/user.model';

declare var M: any;

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
  providers:[UserService]
})
export class AddNewUserComponent implements OnInit {
  constructor(public userAgentService: UserService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    this.resetForm();
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
        this.resetForm(form);
        alert('User Saved');
        console.log("Saved");
        this.router.navigateByUrl('/user-account');
      });
    }
    else {
      this.userAgentService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
        console.log("Updated");
        alert('User Updated');
        this.router.navigateByUrl('/user-account');
      });
    }
  }
}