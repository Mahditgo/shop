"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _orderController = require("../controllers/order.controller.js");
var _protect = require("../middleware/protect.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/add-order', _protect.protectRoute, _orderController.createOrder).get('/:userId', _protect.protectRoute, _orderController.getAllOrdersByUser);
var _default = exports["default"] = router;