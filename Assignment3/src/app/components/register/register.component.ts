import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {User} from '../../model/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id: String = (new Date()).getTime() + '';
  username: String;
  password: String;
  firstname: String;
  email: String;
  lastname: String;


  constructor(private userService: UserService, private router: Router) {
  }

  RegisterUser(user = new User(this.id, this.username, this.password, this.email, this.firstname, this.lastname)) {
    this.userService.createUser(user);
    console.log(user);
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
