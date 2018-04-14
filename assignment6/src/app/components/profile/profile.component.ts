import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, CanActivate} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uid: String;
  user: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
  }

  canActivate() {
    return this.userService.loggedIn();
  }


  updateUser(uid) {
    this.route.params.subscribe(params => {
      return this.userService.updateUser(this.user).subscribe(
        (user) => {
          this.user = user;
          if (user) {
            console.log(user);
            this.router.navigate(['/login']);
          }
        }
      );
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.sharedService.user;
      this.uid = this.user['_id'];
     // this.uid = params['uid'];
      return this.userService.findUserById(this.uid).subscribe(
        (user: User) => {
          this.user = user;
          console.log('User:' + this.user);
          console.log('User:' + this.user._id);
        }
      );
    });
  }

}
