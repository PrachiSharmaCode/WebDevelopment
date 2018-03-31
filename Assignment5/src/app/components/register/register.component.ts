import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';
import {Router} from '@angular/router';
import {Page} from '../../model/page.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id: String = (new Date()).getTime() + '';
  username: String;
  password: String;
  firstName: String;
  email: String;
  lastName: String;
  user: User;

  constructor(private userService: UserService, private router: Router) {
  }

  Register() {

    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName
    };

    return this.userService.createUser(newUser).subscribe(
      (user) => {
        this.user = user;
        if (user) {
          console.log(user);
          this.router.navigate(['/profile', user._id]);
        }
      }
    );
  }

  //
  // RegisterUser(user = new User(this.id, this.username, this.password, this.email, this.firstname, this.lastname)) {
  //   this.userService.createUser(user);
  //   console.log(user);
  //   this.router.navigate(['/login']);
  // }

  ngOnInit() {
  }

}
