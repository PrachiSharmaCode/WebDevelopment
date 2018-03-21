import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private userService: UserService, private router: Router) {
  }

  login(username: String, password: String) {
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user: User) => {
        if (user) {
          console.log(user);
          this.router.navigate(['/profile', user._id]);
        }
      });
  }

  register() {
    this.router.navigate(['/register']);
  }


  ngOnInit() {
  }

}
