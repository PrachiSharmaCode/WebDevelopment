var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");

var widgetModel = mongoose.model("widgetModel", widgetSchema);

widgetModel.findWidgetById = findWidgetById;
widgetModel.createWidget = createWidget;
widgetModel.findWidgetsForPage = findWidgetsForPage;
widgetModel.updateWidget =  updateWidget;
widgetModel.deleteWidget = deleteWidget;

module.exports = widgetModel;


function findWidgetsForPage(pageId) {
  return widgetModel.find({page: pageId});
}

function updateWidget(widgetId,website) {
  return widgetModel.updateOne({_id: widgetId},website)
}



function deleteWidget(widgetId) {
  return widgetModel.deleteOne({_id: widgetId})
}

function findWidgetById(widgetId){
  return widgetModel.findById(widgetId);
}

function createWidget(widget){
  console.log(widget);
  return widgetModel.create(widget);
}

function reorderWidgets(pageId, startIndex, endIndex) {
  return WidgetModel.find({_page:pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        }else if (widget.position > startIndex
          && widget.position <= endIndex){
          widget.position --;
          widget.save();
        }else {
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          } else if(widget.position < startIndex
            && widget.position >= endIndex){
            widget.position ++;
            widget.save();
          }
        }
      }
    })
  })
}

