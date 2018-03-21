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

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets: Widget[] = [
    new Widget('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/zJAOtGUAKYY'),
    new Widget('456', 'HEADER', '321', '2', 'GIZMODO'),
    new Widget('789', 'HEADER', '321', '1', 'test Heading'),
    new Widget('098', 'IMAGE', '321', '2', 'text', '100%', 'https://pbs.twimg.com/media/DKRtRWMVAAAPIir.jpg'),
    new Widget('111', 'HTML', '321', '2', '<p>blalbla</p>'),
  ];


  createWidget(pageId: String, widget: Widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  uploadImageByImagename(imageName: String) {
    const url = this.baseUrl + '/api/image/' + imageName;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWidgetForPage(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(newWidget: Widget) {
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


}
