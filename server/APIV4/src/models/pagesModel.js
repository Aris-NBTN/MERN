"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var pageSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  keywords: [{
    type: String
  }],
  group: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Group'
  },
  content: {
    html: {
      type: String
    },
    css: {
      type: String
    },
    js: {
      type: String
    }
  },
  edit: {
    type: Object
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('pages', pageSchema);
exports["default"] = _default;