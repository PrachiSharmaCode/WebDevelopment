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
  pages: Page[] = [];

  constructor(private userService: UserService, private  webService: WebsiteService, private pageSevice: PageService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  updatePage() {
    this.activatedRoute.params.subscribe(params => {
      return this.pageSevice.updatePage(this.page).subscribe(
        (page: Page) => {
          this.page = page;
          this.router.navigate(['/profile', this.userId, 'website', this.WebId, 'page']);
        }
      );
    });
  }

  deletePage() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.pageId = params['pid'];
      return this.pageSevice.deletePage(this.pageId).subscribe(
        (page) => {
          this.pages = page;
          this.router.navigate(['/profile', this.userId, 'website', this.WebId, 'page']);
        }
      );
    });
  }

  profile() {
    this.router.navigate(['/profile', this.userId]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        return this.userService.findUserById(params['userId']).subscribe(
          (user: User) => {
            this.user = user;
          }
        );
      }
    );

    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pid'];
        return this.pageSevice.findPageById(this.pageId).subscribe(
          (page: Page) => {
            this.page = page;
          }
        );
      }
    );


    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.WebId = params['wid'];
        return this.pageSevice.findPagesForWebsite(this.WebId).subscribe(
          (pages: Page[] = []) => {
            this.pages = pages;
          }
        );
      }
    );
  }

}
