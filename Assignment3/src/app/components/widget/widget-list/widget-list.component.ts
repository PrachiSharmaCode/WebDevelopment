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



@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

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
      this.webId = params['wid'];
      this.userId = params['uid'];
      this.pageId = params['pid'];
      this.user = this.userService.findUserById(this.userId);
      this.website = this.websiteService.findWebsitesById(this.webId);
      this.page = this.pageService.findPageById(this.pageId);
    });

    this.widgets = this.widgetService.findWidgetsByPage(this.pageId);
  }

}

@Pipe({ name: 'safe' })
export class SafePipeComponent implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
