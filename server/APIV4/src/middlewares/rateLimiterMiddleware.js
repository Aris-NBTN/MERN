"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));
var limiter = (0, _expressRateLimit["default"])({
  windowMs: 1 * 60 * 1000,
  max: 200,
  message: {
    status: 429,
    message: 'Quá nhhiều yêu cầu, vui lòng thử lại sau 1 phút'
  }
});
var _default = limiter;
exports["default"] = _default;