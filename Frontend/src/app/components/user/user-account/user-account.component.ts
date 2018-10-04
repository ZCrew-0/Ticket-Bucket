import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user-service/user.service';
import { User } from '../../../services/user-service/user.model';

declare var M: any;
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
  providers: [UserService]

})

export class UserAccountComponent implements OnInit {
  user: any;
  constructor(
    public userAgentService: UserService,
    private authService: AuthService,
    private router: Router,
    private zone:NgZone,
  ) { }

  ngOnInit() {
    this.getProfileDetails();
    console.log('init');
  }

  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }
}
