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
  selector: 'app-edit-widget',
  templateUrl: './edit-widget.component.html',
  styleUrls: ['./edit-widget.component.css']
})
export class EditWidgetComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  widgetId: String;
  page: Page;
  widget: Widget;
  widgetType: String;

  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.webId = params['wid'];
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid']
      this.widgetType = params['wgtype']
      this.user =  this.userService.findUserById(this.userId);
      this.website = this.websiteService.findWebsitesById(this.webId);
      this.page =  this.pageService.findPageById(this.pageId);
      this.widget =  this.widgetService.findWidgetsById(this.widgetId);
    });
  }

}
