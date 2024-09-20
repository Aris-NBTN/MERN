"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluginsController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _slugify = _interopRequireDefault(require("slugify"));
var _pluginsModel = _interopRequireDefault(require("../models/pluginsModel"));
var _jsPluginsModel = _interopRequireDefault(require("../models/jsPluginsModel"));
var _cssPluginsModel = _interopRequireDefault(require("../models/cssPluginsModel"));
var _path = _interopRequireDefault(require("path"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var addFileEV = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var files, promises;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          files = req.files;
          promises = files.map( /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
              var extension;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    extension = _path["default"].extname(file.originalname).toLowerCase();
                    if (!(extension === '.css')) {
                      _context.next = 6;
                      break;
                    }
                    _context.next = 4;
                    return _cssPluginsModel["default"].create({
                      link: "/plugins/ev/".concat(file.filename)
                    });
                  case 4:
                    _context.next = 12;
                    break;
                  case 6:
                    if (!(extension === '.js')) {
                      _context.next = 11;
                      break;
                    }
                    _context.next = 9;
                    return _jsPluginsModel["default"].create({
                      link: "/plugins/ev/".concat(file.filename)
                    });
                  case 9:
                    _context.next = 12;
                    break;
                  case 11:
                    throw new Error("Unsupported file type: ".concat(extension));
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context2.next = 5;
          return Promise.all(promises);
        case 5:
          res.status(_httpStatusCodes.StatusCodes.CREATED).json({
            message: 'Files uploaded successfully'
          });
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function addFileEV(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var addFilePlugins = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data, newData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = _objectSpread(_objectSpread({}, req.body), {}, {
            src: "/plugins/".concat(req.file.filename)
          });
          _context3.next = 4;
          return new _pluginsModel["default"](data).save();
        case 4:
          newData = _context3.sent;
          res.status(200).json({
            message: "Đã thêm plugins",
            newData: newData
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function addFilePlugins(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var all = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var allData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _pluginsModel["default"].find({}).sort({
            createdAt: -1
          });
        case 3:
          allData = _context4.sent;
          res.status(_httpStatusCodes.StatusCodes.CREATED).json(allData);
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function all(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();
var del = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _pluginsModel["default"].findByIdAndDelete(id);
        case 4:
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            message: 'Đã xóa danh mục!'
          });
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function del(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
var pluginsController = {
  addFileEV: addFileEV,
  addFilePlugins: addFilePlugins,
  all: all,
  del: del
};
exports.pluginsController = pluginsController;