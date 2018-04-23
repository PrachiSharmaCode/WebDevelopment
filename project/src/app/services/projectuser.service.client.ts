import {User} from '../model/user.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {Page} from '../model/page.model.client';
import {environment} from '../../environments/environment';
import { SharedService} from './shared.service';
import {Router} from '@angular/router';

@Injectable()
export class ProjectUserService {

  constructor(private http: Http, private router: Router, private sharedService: SharedService) {
  }

  baseUrl = environment.baseUrl;

  options = new RequestOptions();


  createUser(user) {
    const url = this.baseUrl + '/projectapi/projectuser';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }

  findUserByCredentials(username, password) {
    return this.http.get(this.baseUrl + '/projectapi/projectuser?username=' + username + '&password=' + password)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId) {
    return this.http.get(this.baseUrl + '/projectapi/projectuser/' + userId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(user) {
    const url = this.baseUrl + '/projectapi/projectuser/' + user._id;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  login(username: String, password: String) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/projectapi/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  register(username: String, password: String, email: String, firstName: String, lastName: String, phone: String, type: String) {


    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      usertype: type
    };

    return this.http.post(this.baseUrl + '/projectapi/register', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
