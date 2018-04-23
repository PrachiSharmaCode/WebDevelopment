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
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-widget-new-image',
  templateUrl: './widget-new-image.component.html',
  styleUrls: ['./widget-new-image.component.css']
})
export class WidgetNewImageComponent implements OnInit {


  baseUrl = environment.baseUrl;
  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  widget: Widget;
  widgets: Widget[] = [];
  page: Page;
  src: string;
  text: string;
  id: String = (new Date()).getTime() + '';

  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }



  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.userService.findUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
        }
      );

    });

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pid'];
        return this.pageService.findPageById(this.pageId).subscribe(
          (page) => {
            this.page = page;
          }
        );
      }
    );

    this.activatedRoute.params.subscribe(params => {
      this.webId = params['wid'];
      return this.websiteService.findWebsiteById(this.webId).subscribe(
        (website) => {
          this.website = website;
          console.log('getting website by id: ' + this.website);
        }
      );
    });

  }

}
