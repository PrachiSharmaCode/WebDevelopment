import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';
import {SharedService} from '../../services/shared.service';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  baseUrl = environment.baseUrl;
  username: String;
  password: String;
  errorFlag =  false;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  login() {

    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    console.log('login username:    ', this.username);
    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
            this.sharedService.user = data;
            this.router.navigate(['/profile', data._id]);
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }


  ngOnInit() {
  }

}
