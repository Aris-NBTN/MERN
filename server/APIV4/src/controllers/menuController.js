"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
// const filePath = path.resolve(__dirname, '../json/menu.json');
// let file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
var allMenu = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function allMenu(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var updateMenu = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function updateMenu(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var menuController = {
  allMenu: allMenu,
  updateMenu: updateMenu
};
exports.menuController = menuController;