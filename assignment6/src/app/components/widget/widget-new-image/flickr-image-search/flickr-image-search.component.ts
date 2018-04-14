import {Component, OnInit} from '@angular/core';
import {User} from '../../../../model/user.model.client';
import {Page} from '../../../../model/page.model.client';
import {Website} from '../../../../model/website.model.client';
import {Widget} from '../../../../model/widget.model.client';
import {environment} from '../../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {WebsiteService} from '../../../../services/website.service.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {PageService} from '../../../../services/page.service.client';
import {FlickrService} from '../../../../services/flickr.sevice.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  baseUrl = environment.baseUrl;
  userId: String;
  webId: String;
  pageId: String;
  user: User;
  website: Website;
  widget: Widget;
  widgets: Widget[] = [];
  page: Page;
  photos: [any];
  error: string;
  searchText: string;

  constructor(private userService: UserService, private websiteService: WebsiteService, private pageService: PageService,
              private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute,
              private flickrService: FlickrService) {
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(pic) {
    let url = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server;
    url += '/' + pic.id + '_' + pic.secret + '_b.jpg';

    const newWidget = {
      widgetType: 'FLICKR',
      url: url
    };

    this.widgetService
      .createWidget(this.pageId, newWidget)
      .subscribe(
        (data: any) => {

          const result = data;
          if (result) {
            this.router.navigate(['/profile', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
          } else {
            this.error = 'failed!';
          }
        }
      );
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

  }

}
