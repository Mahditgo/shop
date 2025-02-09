"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _productController = require("../controllers/product.controller.js");
var _commentController = require("../controllers/comment.controller.js");
var _protect = require("../middleware/protect.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get('/', _protect.protectRoute, _productController.getAllProducts).get('/:productId', _productController.getProduct).post('/:productId/comments', _protect.protectRoute, _commentController.createCommentForProduct);
var _default = exports["default"] = router;