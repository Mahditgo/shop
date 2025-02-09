"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var productSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String
    // required : true
  },
  category: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
});
var Product = exports.Product = _mongoose["default"].model('Product', productSchema);