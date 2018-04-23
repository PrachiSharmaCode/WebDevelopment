import {User} from '../model/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Page} from '../model/page.model.client';
import {environment} from '../../environments/environment';
import {Website} from '../model/website.model.client';


@Injectable()
export class ReviewService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createReviewForTrcuk(truckid: String, userId: String, review) {
    const url = this.baseUrl + '/reviewapi/' + userId + '/' + truckid;
    return this.http.post(url, review).map((response: Response) => {
      return response.json();
    });
  }

  getReviewFortruk(truckId: String) {
    console.log('Inside client service');
    const url = this.baseUrl + '/reviewapi/' + truckId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }


}
