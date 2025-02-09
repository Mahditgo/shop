"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/auth.controller.js");
var _userController = require("../controllers/user.controller.js");
var _protect = require("../middleware/protect.js");
var _upload = _interopRequireDefault(require("../middleware/upload.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/signup', _authController.signup).post('/login', _authController.login).post('/logout', _authController.logout).post('/forgot-password', _userController.forgotPassword).post('/reset-password/:token', _userController.resetPassword).put('/update-password', _protect.protectRoute, _userController.updatePassword).post('/upload', _protect.protectRoute, _upload["default"].single('profilePic'), _userController.uploadProfilePicture);
var _default = exports["default"] = router;