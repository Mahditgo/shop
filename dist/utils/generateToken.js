"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTokenAndSetCookie = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var generateTokenAndSetCookie = exports.generateTokenAndSetCookie = function generateTokenAndSetCookie(userId, res) {
  var toekn = _jsonwebtoken["default"].sign({
    userId: userId
  }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  });
  res.cookie('jwt', toekn, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== "development"
  });
  return toekn;
};