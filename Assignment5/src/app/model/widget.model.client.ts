export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  rows: String;
  name: String;
  placeholder: String;
  formatted: Boolean;


  constructor(_id, type, pageId, size = '1', text = 'text', width = '100%', url = 'url', rows = 'rows', name = 'name',
              placeholder = 'placeholder', formatted = 'formatted') {
    this._id = _id;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.rows = rows;
    this.name = name;
    this.placeholder = placeholder;
    this.formatted = false;
  }
}
