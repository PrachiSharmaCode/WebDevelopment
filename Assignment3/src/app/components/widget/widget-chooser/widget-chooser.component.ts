import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';
import { Page} from '../../../model/page.model.client';
import {PageService} from '../../../services/page.service.client';
import { Widget} from '../../../model/widget.model.client';
import { WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  widget: Widget;
  page: Page;
  text: String;
  size: String;

  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  profile() {
    this.router.navigate(['/profile', this.userId]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.webId = params['wid'];
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.user =  this.userService.findUserById(this.userId);
      this.website = this.websiteService.findWebsitesById(this.webId);
      this.page =  this.pageService.findPageById(this.pageId);
    });
  }

}
