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


  createPageForWebsite(websiteId: String, page) {
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
    const url = this.baseUrl + '/api/page/' + newPage._id;
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
