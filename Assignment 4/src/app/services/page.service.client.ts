import {Page} from '../model/page.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Website} from '../model/website.model.client';
import {environment} from '../../environments/environment';


@Injectable()
export class PageService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  pages: Page[] = [
    new Page('321', 'page321', '321', 'test page 321'),
    new Page('111', 'page111', '111', 'test page 111'),
    new Page('222', 'page222', '222', 'test page 222'),
    new Page('333', 'page3', '333', 'test page 333'),
    new Page('432', 'page432', '432', 'test page 432'),
    new Page('234', 'page234', '234', 'test page 234'),
  ];


  createPageForWebsite(websiteId: String, page: Page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page).map((response: Response) => {
      return response.json();
    });
  }


  findPagesForWebsite(websiteId: String) {
    console.log('Inside client service');
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findPageById(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updatePage(newPage: Page) {
    const url = 'http://localhost:3100/api/page/' + newPage._id;
    return this.http.put(url, newPage).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
