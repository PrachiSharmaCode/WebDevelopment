import {Injectable} from '@angular/core';
import {Widget} from '../model/widget.model.client';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Website} from '../model/website.model.client';
import {Page} from '../model/page.model.client';


@Injectable()
export class WidgetService {


  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createWidget(pageId: String, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetForPage(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(newWidget) {
    const url = this.baseUrl + '/api/widget/' + newWidget._id;
    return this.http.put(url, newWidget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetById(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.put(url, '').map((res: Response) => {
          const data = res;
          return data;
        }
      );
  }


}
