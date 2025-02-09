"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _authRoute = _interopRequireDefault(require("./Router/auth.route.js"));
var _productRoute = _interopRequireDefault(require("./Router/product.route.js"));
var _categotyRoute = _interopRequireDefault(require("./Router/categoty.route.js"));
var _cartRoute = _interopRequireDefault(require("./Router/cart.route.js"));
var _orderRoute = _interopRequireDefault(require("./Router/order.route.js"));
var _adminRouter = _interopRequireDefault(require("./Router/admin.router.js"));
var _db = require("./lib/db.js");
var _url = require("url");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
_dotenv["default"].config();
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
app.use('/uploads', _express["default"]["static"](_path["default"].join(_dirname, 'uploads')));

// Port
var port = process.env.PORT || 5000;

//Root Routs
app.use('/api/v1/auth', _authRoute["default"]);
app.use('/api/v1/products', _productRoute["default"]);
app.use('/api/v1/category', _categotyRoute["default"]);
app.use('/api/v1/cart', _cartRoute["default"]);
app.use('/api/v1/order', _orderRoute["default"]);
app.use('/api/v1/admin', _adminRouter["default"]);
app.listen(port, function () {
  console.log("app running on port ".concat(port));

  //connect DB
  (0, _db.connectDB)();
});