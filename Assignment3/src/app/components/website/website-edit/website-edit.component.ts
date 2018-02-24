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

  updatewebsite(website) {
    console.log(website);
    this.websiteServoce.updateWebsite(website._id, website);
    this.router.navigate(['/profile', this.user._id, 'website']);
  }

  deleteWebsite(website) {
    this.websiteServoce.deleteWebsite(website._id);
    this.router.navigate(['/profile', this.user._id, 'website']);
  }

  profile(){
    this.router.navigate(['/profile', this.uid]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      this.uid = params['uid'];
      this.user =  this.userService.findUserById(this.uid);
      this.website = this.websiteServoce.findWebsitesById(this.wid);
    });
    this.websites = this.websiteServoce.findWebsitesByUser(this.uid);
  }

}
