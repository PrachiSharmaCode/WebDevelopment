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
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  WebId: String;
  user: User;
  website: Website;
  page: Page;
  name: String;
  pageId: String;
  title: String;
  id: String = (new Date()).getTime() + '';
  pages: Page[] = [];

  constructor(private userService: UserService, private  webService: WebsiteService, private pageSevice: PageService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }


  createPage() {
    this.activatedRoute.params.subscribe(params => {
      this.WebId = params['wid'];
      return this.pageSevice.createPageForWebsite
      (this.WebId, this.page = new Page(this.id, this.name, this.website._id, this.title)).subscribe(
        (page: Page[] = []) => {
          this.pages = page;
          if (page) {
            console.log(page);
            this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page']);
          }
        }
      );
    });
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
    this.activatedRoute.params.subscribe(params => {
      this.WebId = params['wid'];
      return this.webService.findWebsiteById(this.WebId).subscribe(
        (website: Website) => {
          this.website = website;
          console.log('getting website by id: ' + this.website);
        }
      );
    });
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pid'];
        return this.pageSevice.findPageById(params['pid']).subscribe(
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
