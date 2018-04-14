import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';
import {Router} from '@angular/router';
import {Page} from '../../model/page.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  // properties
  username: string;
  password: string;
  vpassword: string;
  error: string;

  constructor(private _userService: UserService, private router: Router) {
  }

  email: String;
  firstName: String;
  lastName: String;

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.vpassword;

    if (this.password === this.vpassword) {
      this._userService.register(this.username, this.password, this.email, this.firstName, this.lastName)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/profile', data._id]);
          }
        );
    } else {
      this.error = 'Passwords do not match!';
    }
  }
}
