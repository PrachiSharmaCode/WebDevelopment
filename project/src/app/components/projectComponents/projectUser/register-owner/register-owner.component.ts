import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectUserService} from '../../../../services/projectuser.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  user: any;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  vpassword: string;
  error: string;

  constructor(private router: Router, private projectuserservice: ProjectUserService) {
  }

  signIn() {
    this.router.navigate(['/signIn']);
  }

  Register() {

    if (this.password === this.vpassword) {
      this.projectuserservice.register(this.username, this.password, this.email, this.firstName, this.lastName, this.phone, 'owner')
        .subscribe(
          (data: any) => {
            this.router.navigate(['/owner', data._id, 'newTruck']);
          }
        );
    } else {
      this.error = 'Passwords do not match!';
    }
  }

  ngOnInit() {
    document.body.style.backgroundImage = 'url(\'../../../../../assets/foodbgimg.png\')';
  }

}
