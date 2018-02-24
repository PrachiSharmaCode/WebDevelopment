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

  constructor(private userService: UserService, private  webService: WebsiteService, private pageSevice: PageService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }


  createPage(page =  new Page(this.id, this.name, this.website._id, this.title)) {
    this.pageSevice.createPage(this.website._id, page);
    this.router.navigate(['/profile', this.user._id, 'website', this.website._id, 'page']);
  }

  profile(){
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
