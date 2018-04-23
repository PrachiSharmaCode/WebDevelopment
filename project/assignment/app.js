module.exports = function (app) {
  require("./services/user.service.server")(app);
  require("./services/website.service.server")(app);
  require("./services/page.service.server")(app);
  require("./services/widget.service.server")(app);
  require("./services/projectuser.service.server")(app);
  require("./services/foodtruck.service.server")(app);
  require("./services/review.service.server")(app);
  var db = require("./model/model");
}
