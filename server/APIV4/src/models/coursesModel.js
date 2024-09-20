"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var coursesSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String
  },
  category: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'CategoryCourse',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sale: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  imgDetail: {
    type: String
  },
  benefit: [{
    type: String
  }],
  customer: [{
    type: String
  }],
  output: [{
    type: String
  }],
  prerequisite: [{
    type: String
  }],
  module: [{
    title: {
      type: String
    },
    children: [{
      title: {
        type: String
      },
      src: {
        type: String
      },
      poster: {
        type: String
      },
      thumbnailTracks: {
        type: String
      },
      textTracks: [{
        src: {
          type: String
        },
        label: {
          type: String
        },
        language: {
          type: String
        },
        kind: {
          type: String,
          "enum": ['subtitles', 'chapters']
        },
        "default": {
          type: Boolean,
          "default": false
        }
      }]
    }]
  }]
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('Courses', coursesSchema);
exports["default"] = _default;