import {Component, OnInit} from '@angular/core';
import {Website} from '../../../model/website.model.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  user: User;
  uid: String;
  wid: String;
  website: Website;
  name: String;
  description: String;
  websites: Website[] = [];


  constructor(private websiteServoce: WebsiteService, private userService: UserService,
              private router: Router, private route: ActivatedRoute) {
  }


  createWebsite() {

    const newWebsite = {
      name: this.name,
      description: this.description,
    };
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
      return this.websiteServoce.createWebsiteForUser
      (this.uid, newWebsite).subscribe(
        (web) => {
          this.websites = web;
          if (web) {
            console.log(web);
            this.router.navigate(['/profile', this.uid, 'website']);
          }
        }
      );
    });
  }


  profile() {
    this.router.navigate(['/profile', this.uid]);
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

    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      return this.websiteServoce.findWebsiteById(this.wid).subscribe(
        (website: Website) => {
          this.website = website;
          console.log('getting website by id: ' + this.website);
        }
      );
    });

    this.route.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        return this.websiteServoce.findWebsiteForUser(this.uid).subscribe(
          (website: Website[] = []) => {
            this.websites = website;
            console.log(this.websites);
          }
        );
      }
    );
  }

}
