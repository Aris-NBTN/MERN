"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _slugify = _interopRequireDefault(require("slugify"));
var _userModel = _interopRequireDefault(require("../models/userModel.js"));
var _authHelper = require("../helpers/authHelper.js");
var _indexControllder = require("./indexControllder.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var nameMess = 'Người dùng';
var singleUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var slug, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          slug = req.params.slug;
          _context.next = 4;
          return (0, _indexControllder.getSigData)(nameMess, {
            slug: slug
          }, _userModel["default"]);
        case 4:
          results = _context.sent;
          res.status(results.status).json(results.message);
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function singleUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var addUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, name, email, password, hashedPassword, _addUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context2.next = 4;
          return (0, _authHelper.hashPassword)(password);
        case 4:
          hashedPassword = _context2.sent;
          _context2.next = 7;
          return _userModel["default"].findOne({
            email: email
          });
        case 7:
          _context2.t0 = _context2.sent;
          if (!_context2.t0) {
            _context2.next = 10;
            break;
          }
          res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Email đã tồn tại'
          });
        case 10:
          _context2.next = 12;
          return new _userModel["default"](_objectSpread(_objectSpread({}, req.body), {}, {
            password: hashedPassword,
            slug: (0, _slugify["default"])(name)
          })).save();
        case 12:
          _addUser = _context2.sent;
          res.status(_httpStatusCodes.StatusCodes.CREATED).json(_addUser);
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t1 = _context2["catch"](0);
          next(_context2.t1);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return function addUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var allUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var results;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _indexControllder.getData)(nameMess, _userModel["default"], {
            sort: {
              createdAt: -1
            }
          });
        case 3:
          results = _context3.sent;
          res.status(results.status).json(results.message);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function allUser(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _indexControllder.deleteData)(nameMess, _userModel["default"], id);
        case 4:
          result = _context4.sent;
          res.status(result.status).json({
            message: result.message,
            _id: id
          });
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function deleteUser(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return (0, _indexControllder.updateData)(nameMess, _userModel["default"], id, req.body);
        case 4:
          result = _context5.sent;
          if (result.data) result.data.password = undefined;
          res.status(result.status).json({
            message: result.message,
            newData: result.data
          });
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function updateUser(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var updateCourse = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var id, user, newCourses, updatedCourses, updatedData, newData;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return _userModel["default"].findById(id);
        case 4:
          user = _context6.sent;
          if (user) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
            message: 'User not found'
          }));
        case 7:
          newCourses = req.body.courses || [];
          updatedCourses = [].concat((0, _toConsumableArray2["default"])(user.courses), (0, _toConsumableArray2["default"])(newCourses.filter(function (courseId) {
            return !user.courses.some(function (existingCourseId) {
              return existingCourseId.equals(courseId);
            });
          })));
          updatedData = _objectSpread(_objectSpread({}, req.body), {}, {
            courses: updatedCourses
          });
          _context6.next = 12;
          return _userModel["default"].findByIdAndUpdate(id, updatedData, {
            "new": true
          });
        case 12:
          newData = _context6.sent;
          res.status(_httpStatusCodes.StatusCodes.OK).json(newData);
          _context6.next = 19;
          break;
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 16]]);
  }));
  return function updateCourse(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
var userController = {
  addUser: addUser,
  allUser: allUser,
  singleUser: singleUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
  updateCourse: updateCourse
};
exports.userController = userController;