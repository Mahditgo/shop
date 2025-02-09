"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;
var _express = require("express");
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var commentSchema = new _mongoose["default"].Schema({
  text: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  product: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var Comment = exports.Comment = _mongoose["default"].model('Comment', commentSchema);