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
  widgets: Widget[] = [];
  page: Page;
  text: string;
  size: string;
  id: String = (new Date()).getTime() + '';


  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  createWidget() {
    this.activatedRoute.params.subscribe(params => {
      this.pageId = params['pid'];
      return this.widgetService.createWidget
      (this.pageId, this.widget = new Widget(this.id, 'HEADER', this.page._id, this.size, this.text)).subscribe(
        (widget: Widget[] = []) => {
          this.widgets = widget;
          if (widget) {
            this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page', this.page._id, 'widget']);
          }
        }
      );
    });
  }

  // createWidget(widget = new Widget(this.id, 'HEADER', this.page._id, this.size, this.text)) {
  //   this.widgetService.createWidget(this.page._id, widget);
  //   console.log(widget);
  //   this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page', this.page._id, 'widget']);
  // }

  profile() {
    this.router.navigate(['/profile', this.userId]);
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

    return this.widgetService.findWidgetForPage(this.pageId).subscribe(
      (widgets: Widget[] = []) => {
        this.widgets = widgets;
        console.log('length of widgets array' + this.widgets.length);
      }
    );
  }

}
