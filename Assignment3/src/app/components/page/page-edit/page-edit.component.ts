import {Component, OnInit} from '@angular/core';
import {Page} from '../../../model/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {Website} from '../../../model/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  WebId: String;
  user: User;
  website: Website;
  page: Page;
  pageId: String;

  constructor(private userService: UserService, private  webService: WebsiteService, private pageSevice: PageService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  updatePage(page) {
    console.log(page);
    this.pageSevice.updatePage(page._id, page);
    this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page']);
  }

  deletePage(page) {
    this.pageSevice.deleteWebsite(page._id);
    this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page']);
  }

  profile() {
    this.router.navigate(['/profile', this.userId]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pid'];
        this.WebId = params['wid'];
        this.userId = params['uid'];
        this.user = this.userService.findUserById(this.userId);
        this.website = this.webService.findWebsitesById(this.WebId);
        this.page = this.pageSevice.findPageById(this.pageId);
      }
    );

  }

}
