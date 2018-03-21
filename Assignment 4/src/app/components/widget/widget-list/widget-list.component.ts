import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Page} from '../../../model/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {Widget} from '../../../model/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  baseUrl = environment.baseUrl;
  public url;
  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  page: Page;
  widgets: Widget[] = [];


  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }

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

@Pipe({name: 'safe'})
export class SafePipeComponent implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
