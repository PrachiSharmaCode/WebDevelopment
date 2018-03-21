import {Injectable} from '@angular/core';
import {Website} from '../model/website.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  // websites: Website[] = WEBSITES;

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  // findAllWebSites() {
  //   return this.websites;
  // }

  updateWebsite( newWebsite: Website) {
    const url = this.baseUrl + '/api/website/' + newWebsite._id;
    return this.http.put(url, newWebsite).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(userId: String, websiteId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  createWebsiteForUser(userId: String, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }


  findWebsiteForUser(userId: String) {
    console.log('Inside client service');
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }


}
