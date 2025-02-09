"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cartController = require("../controllers/cart.controller.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/add-to-cart', _cartController.addToCart).get('/:userId', _cartController.productsInCart).patch('/:userId', _cartController.updateQuantity)["delete"]('/:userId', _cartController.deleteAllFromCart)["delete"]('/:userId/:productId', _cartController.deleteFromCart);
var _default = exports["default"] = router;