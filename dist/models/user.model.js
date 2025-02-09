"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var userSchema = new _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: String,
    "default": ""
  },
  role: {
    type: String,
    "enum": ['Admin', 'user'],
    "default": 'user'
  },
  passwrodResetToken: String,
  passwrodResetExpires: Date
}, {
  timestamps: true
});
var User = exports.User = _mongoose["default"].model('User', userSchema);