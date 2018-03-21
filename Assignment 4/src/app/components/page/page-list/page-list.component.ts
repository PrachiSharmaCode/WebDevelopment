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
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  WebId: String;
  user: User;
  website: Website;
  pages: Page[] = [];

  constructor(private userService: UserService, private  webService: WebsiteService, private pageSevice: PageService,
              private router: Router, private activatedRoute: ActivatedRoute) {
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
