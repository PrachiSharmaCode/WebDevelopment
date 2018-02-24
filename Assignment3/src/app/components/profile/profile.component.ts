import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {WebsiteService} from '../../services/website.service.client';
import {User} from '../../model/user.model.client';
import {Website} from '../../model/website.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uid: String;
  user: User;
  username: String;
  firstName: String;
  lastName: String;
  email: String;


  constructor(private userService: UserService, private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) {
  }

  updateUser(user) {
    console.log(user);
    this.user = this.userService.updateUser(user._id, user);
    this.router.navigate(['/login']);
  }

  website() {
    this.router.navigate(['/profile', this.user._id, 'website']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
      this.user = this.userService.findUserById(this.uid);
    });
  }

}
