import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {ProjectUserService} from '../../../services/projectuser.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-project-login',
  templateUrl: './project-login.component.html',
  styleUrls: ['./project-login.component.css']
})
export class ProjectLoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  user: any;
  username: String;
  password: String;

  constructor(private router: Router, private projecyuserservice: ProjectUserService, private sharedService: SharedService) {
  }

  login() {


    // calling client side userservice to send login information
    console.log('login username:    ', this.username);
    this.projecyuserservice.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          if (data.usertype === 'user') {
            this.router.navigate(['/search', data._id]);
          }
          if (data.usertype === 'owner') {
            this.router.navigate(['/owner', data._id, 'trucks']);
          }
        }
      );
  }

  goToSignUp() {
    this.router.navigate(['/select']);
  }

  ngOnInit() {
  }

}
