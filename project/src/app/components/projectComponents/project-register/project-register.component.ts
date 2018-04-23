import {Component, OnInit} from '@angular/core';
import {ProjectUserService} from '../../../services/projectuser.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-register',
  templateUrl: './project-register.component.html',
  styleUrls: ['./project-register.component.css']
})
export class ProjectRegisterComponent implements OnInit {

  user: any;
  username: String;
  password: String;
  vpassword: string;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  type: String;
  error: string;


  constructor(private router: Router, private projectuserservice: ProjectUserService) {
  }

  signIn() {
    this.router.navigate(['/signIn']);
  }

  Register() {
    if (this.password === this.vpassword) {
      this.projectuserservice.register(this.username, this.password, this.email, this.firstName, this.lastName, this.phone, 'user')
        .subscribe(
          (data: any) => {
            this.router.navigate(['/search', data._id]);
          }
        );
    } else {
      this.error = 'Passwords do not match!';
    }
  }

  ngOnInit() {
  }

}
