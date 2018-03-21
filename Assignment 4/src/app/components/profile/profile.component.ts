import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uid: String;
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute, private router: Router) {
  }


  updateUser(uid) {
    this.route.params.subscribe(params => {
      return this.userService.updateUser(uid).subscribe(
        (user: User) => {
          this.user = user;
          if (user) {
            console.log(user);
            this.router.navigate(['/login']);
          }
        }
      );
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
      return this.userService.findUserById(this.uid).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    });
  }

}
