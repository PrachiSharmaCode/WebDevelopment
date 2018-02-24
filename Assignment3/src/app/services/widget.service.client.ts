import {Injectable} from '@angular/core';
import {Widget} from '../model/widget.model.client';


@Injectable()
export class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets: Widget[] = [
    new Widget('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/zJAOtGUAKYY'),
    new Widget('456', 'HEADER', '321', '2', 'GIZMODO'),
    new Widget('789', 'HEADER', '321', '1', 'test Heading'),
    new Widget('098', 'IMAGE', '321', '2', 'text', '100%', 'https://pbs.twimg.com/media/DKRtRWMVAAAPIir.jpg'),
    new Widget('111', 'HTML', '321', '2', '<p>blalbla</p>'),
  ];

  createWidget(pageId, widget) {
    this.widgets.push(widget);
  }

  findWidgetsByPage(pageId: String) {
    const resultSet = [];
    for (const i in this.widgets) {
      if (this.widgets[i].pageId === pageId) {
        resultSet.push(this.widgets[i]);
      }
    }
    return resultSet;
  }

  findWidgetsById(widgetId: String) {
    return this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  deleteWidget(widgetId: String) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }


  updateWidget(widgetId, widget) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }


}
