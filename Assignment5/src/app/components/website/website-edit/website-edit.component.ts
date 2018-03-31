import {Component, OnInit} from '@angular/core';
import {Website} from '../../../model/website.model.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  user: User;
  uid: String;
  wid: String;
  website: Website;
  websites: Website[] = [];

  constructor(private websiteServoce: WebsiteService, private userService: UserService,
              private router: Router, private route: ActivatedRoute) {
  }

  updateWebsite() {
    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      this.uid = params['uid'];
      return this.websiteServoce.updateWebsite(this.website).subscribe(
        (website) => {
          this.website = website;
          this.router.navigate(['/profile', this.uid, 'website']);
        }
      );
    });
  }

  deleteWebsite() {
    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      this.uid = params['uid'];
      return this.websiteServoce.deleteWebsite(this.uid, this.wid).subscribe(
        (webs) => {
          this.websites = webs;
          this.router.navigate(['/profile', this.uid, 'website']);
        }
      );
    });
  }

  updatewebsite() {
    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      return this.websiteServoce.updateWebsite(this.website).subscribe(
        (web) => {
          this.website = web;
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
        (website) => {
          this.website = website;
          console.log('getting website by id: ' + this.website.name);
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
