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
  id: String = (new Date()).getTime() + '';
  description: String;
  websites: Website[] = [];




  constructor(private websiteServoce: WebsiteService, private userService: UserService,
              private router: Router, private route: ActivatedRoute) {
  }

  createWebsite(website =  new Website(this.id, this.name, this.uid, this.description)) {
    this.websiteServoce.createWebsite(this.uid, website);
    console.log(website);
    this.router.navigate(['/profile', this.user._id, 'website']);
  }

  profile(){
    this.router.navigate(['/profile', this.uid]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      this.uid = params['uid'];
      this.user = this.userService.findUserById(this.uid);
      this.website = this.websiteServoce.findWebsitesById(this.wid);
    });
    this.websites = this.websiteServoce.findWebsitesByUser(this.uid);
  }

}
