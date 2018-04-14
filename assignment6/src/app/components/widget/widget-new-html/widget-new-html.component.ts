import {Component, OnInit} from '@angular/core';
import {Website} from '../../../model/website.model.client';
import {Page} from '../../../model/page.model.client';
import {Widget} from '../../../model/widget.model.client';
import {User} from '../../../model/user.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {PageService} from '../../../services/page.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-new-html',
  templateUrl: './widget-new-html.component.html',
  styleUrls: ['./widget-new-html.component.css']
})
export class WidgetNewHtmlComponent implements OnInit {

  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  widgetId: String;
  page: Page;
  widget: Widget;
  widgets: Widget[] = [];
  text: string;
  size: string;
  url: string;
  width: string;
  rows: string;
  name: string;
  placeholder: string;
  formatted: string;

  id: String = (new Date()).getTime() + '';

  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  createWidget() {

    const newWidget = {
      widgetType: 'HTML',
      text: this.text,
      name: this.name,
    };

    this.activatedRoute.params.subscribe(params => {
      this.pageId = params['pid'];
      return this.widgetService.createWidget
      (this.pageId, newWidget).subscribe(
        (widget: Widget[] = []) => {
          this.widgets = widget;
          if (widget) {
            this.router.navigate(['/profile', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
          }
        }
      );
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.userService.findUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
        }
      );

    });

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pid'];
        return this.pageService.findPageById(this.pageId).subscribe(
          (page: Page) => {
            this.page = page;
          }
        );
      }
    );

    this.activatedRoute.params.subscribe(params => {
      this.webId = params['wid'];
      return this.websiteService.findWebsiteById(this.webId).subscribe(
        (website: Website) => {
          this.website = website;
          console.log('getting website by id: ' + this.website);
        }
      );
    });

    this.activatedRoute.params.subscribe(params => {
      this.widgetId = params['wgid'];
      return this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          console.log('Widget ID: in header' + this.widget._id);
        }
      );
    });
    return this.widgetService.findWidgetForPage(this.pageId).subscribe(
      (widgets: Widget[] = []) => {
        this.widgets = widgets;
        console.log('length of widgets array' + this.widgets.length);
      }
    );
  }

}
