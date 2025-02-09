"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _adminController = require("../controllers/admin.controller.js");
var _protect = require("../middleware/protect.js");
var _isAdmin = require("../middleware/isAdmin.js");
var _upload = _interopRequireDefault(require("../middleware/upload.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get('/', _protect.protectRoute, _isAdmin.isAdmin, _adminController.getAllUsers).get('/:id', _protect.protectRoute, _isAdmin.isAdmin, _adminController.getUser)["delete"]('/:id', _protect.protectRoute, _isAdmin.isAdmin, _adminController.deleteUser)["delete"]('/:id', _isAdmin.isAdmin, _adminController.deleteCategory)["delete"]('/:id', _adminController.deleteProduct).post('/add-product', _protect.protectRoute, _isAdmin.isAdmin, _upload["default"].single('image'), _adminController.createProduct);
var _default = exports["default"] = router;