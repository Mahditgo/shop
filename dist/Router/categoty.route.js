"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _adminController = require("../controllers/admin.controller.js");
var _categoryController = require("../controllers/category.controller.js");
var _protect = require("../middleware/protect.js");
var _isAdmin = require("../middleware/isAdmin.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/cerate-category', _protect.protectRoute, _isAdmin.isAdmin, _adminController.createCategory).get('/', _categoryController.getAllCategories).get('/:id', _categoryController.getCategory).get('/:id/products', _categoryController.categoryProducts);
var _default = exports["default"] = router;