"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userType: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Role',
    type: String,
    required: true
  },
  gender: String,
  activeStatus: Boolean,
  picture: String,
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  courses: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Courses'
  }]
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('users', userSchema);
exports["default"] = _default;