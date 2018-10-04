import { Component, OnInit,NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { UserService } from '../../../services/user-service/user.service';
import { User } from '../../../services/user-service/user.model';

declare var M: any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  user: any;
  constructor(public userAgentService: UserService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private zone:NgZone,
  ) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userAgentService.selectedUser = {
      _id: "",
      fname: "",
      lname: "",
      username: "",
      password: "",
      email: "",
      telephone: [""],
      address: "",
      profilepic:"",
      isadmin: false
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.userAgentService.postUser(form.value).subscribe((res) => {
        console.log("submitpost");
        alert('Details Saved');
        this.resetForm(form);
        this.zone.run(() => {        
        this.router.navigateByUrl('/user-account');
        });
      });
    }else {
      this.userAgentService.putUser(form.value).subscribe((res) => {
        console.log("submitput");
        this.resetForm(form);
        alert('Details Updated');
        this.zone.run(() => {
        this.router.navigateByUrl('/user-account');
        });
      });
    }
  }
  refreshUserList() {
    this.userAgentService.getUserList().subscribe((res) => {
      this.userAgentService.user =  res as User[];
    });
  }
  onEdit(user) {
    this.userAgentService.selectedUser = user;
  }
}
