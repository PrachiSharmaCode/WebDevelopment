import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Page} from '../../../model/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {Widget} from '../../../model/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  widget: Widget;
  page: Page;
  text: string;
  size: string;
  id: String = (new Date()).getTime() + '';


  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  createWidget(widget = new Widget(this.id, 'HEADER', this.page._id, this.size, this.text)) {
    this.widgetService.createWidget(this.page._id, widget);
    console.log(widget);
    this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page', this.page._id, 'widget']);
  }

  profile(){
    this.router.navigate(['/profile', this.userId]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.webId = params['wid'];
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.user = this.userService.findUserById(this.userId);
      this.website = this.websiteService.findWebsitesById(this.webId);
      this.page = this.pageService.findPageById(this.pageId);
    });
  }

}
