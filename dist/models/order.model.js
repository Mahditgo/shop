"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var orderSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: _mongoose["default"].Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    "enum": ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    "default": 'Pending'
  },
  category: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Category'
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: true
});
var Order = exports.Order = _mongoose["default"].model('Order', orderSchema);