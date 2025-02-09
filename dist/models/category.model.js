"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var categorySchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var Category = exports.Category = _mongoose["default"].model('Category', categorySchema);