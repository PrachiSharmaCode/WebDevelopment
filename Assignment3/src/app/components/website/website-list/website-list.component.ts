import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  user: User;
  wid: String;
  website: Website;
  websites: Website[] = [];

  constructor(private userService: UserService, private websiteService: WebsiteService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  profile(){
    this.router.navigate(['/profile', this.userId]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.user = this.userService.findUserById(this.userId);
      }
    );

    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }
}
