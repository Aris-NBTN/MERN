"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userModel = _interopRequireDefault(require("../models/userModel.js"));
var _authHelper = require("../helpers/authHelper.js");
var _httpStatusCodes = require("http-status-codes");
var _slugify = _interopRequireDefault(require("slugify"));
var _token2 = require("../utils/token.js");
var _response = require("../utils/response.js");
var _protected = require("../utils/protected.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, name, email, password, hashedPassword, oldUser, user, token, userNew;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.next = 4;
          return (0, _authHelper.hashPassword)(password);
        case 4:
          hashedPassword = _context.sent;
          _context.next = 7;
          return _userModel["default"].findOne({
            email: email
          });
        case 7:
          oldUser = _context.sent;
          if (!oldUser) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.NOT_ACCEPTABLE, false, {}, "Tài khoản đã tồn tại"));
        case 10:
          _context.next = 12;
          return new _userModel["default"](_objectSpread(_objectSpread({}, req.body), {}, {
            password: hashedPassword,
            slug: (0, _slugify["default"])(name),
            userType: "user",
            activeStatus: true
          })).save();
        case 12:
          user = _context.sent;
          _context.next = 15;
          return (0, _token2.createToken)(user);
        case 15:
          token = _context.sent;
          if (user) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.FORBIDDEN, false, {}, "Could not create user due to user error"));
        case 18:
          userNew = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            userType: user.userType,
            activeStatus: user.activeStatus,
            slug: user.slug
          };
          return _context.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.ACCEPTED, true, {
            user: userNew,
            token: token
          }, null));
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 22]]);
  }));
  return function register(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, name, password, user, matched, userNew, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, name = _req$body2.name, password = _req$body2.password;
          if (!(!name || !password)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "Could not login, Please Provide all information"));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return _userModel["default"].findOne({
            $or: [{
              name: name
            }, {
              email: name
            }]
          });
        case 6:
          user = _context2.sent;
          if (user) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.NOT_FOUND, false, {}, "Tài khoản không tồn tại"));
        case 9:
          _context2.next = 11;
          return (0, _authHelper.comparePassword)(password, user.password);
        case 11:
          matched = _context2.sent;
          userNew = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            userType: user.userType,
            activeStatus: user.activeStatus,
            slug: user.slug,
            courses: user.courses
          };
          if (!matched) {
            _context2.next = 26;
            break;
          }
          if (!user.activeStatus) {
            _context2.next = 23;
            break;
          }
          _context2.next = 17;
          return (0, _token2.createToken)(user);
        case 17:
          token = _context2.sent;
          if (!token) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.ACCEPTED, true, {
            user: userNew,
            token: token
          }, null));
        case 20:
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "Could not login"));
        case 23:
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.NOT_ACCEPTABLE, false, {}, "Tài khoản đã bị khóa"));
        case 24:
          _context2.next = 27;
          break;
        case 26:
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.NOT_ACCEPTABLE, false, {}, "Mật khẩu không chính xác"));
        case 27:
          _context2.next = 32;
          break;
        case 29:
          _context2.prev = 29;
          _context2.t0 = _context2["catch"](3);
          return _context2.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR, false, {}, _context2.t0.message));
        case 32:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 29]]);
  }));
  return function login(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var loginGoogle = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var account, name, user, _user, token, _userNew, userNew, _token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          account = req.body;
          name = account.email;
          if (name) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "Could not login, Please Provide all information"));
        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return _userModel["default"].findOne({
            $or: [{
              email: name
            }, {
              name: name
            }]
          });
        case 7:
          user = _context3.sent;
          if (user) {
            _context3.next = 19;
            break;
          }
          _context3.next = 11;
          return new _userModel["default"]({
            name: name,
            email: name,
            password: "123456",
            slug: (0, _slugify["default"])(name),
            userType: "user",
            activeStatus: true,
            picture: account.picture
          }).save();
        case 11:
          _user = _context3.sent;
          _context3.next = 14;
          return (0, _token2.createToken)(_user);
        case 14:
          token = _context3.sent;
          if (_user) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.FORBIDDEN, false, {}, "Could not create user due to user error"));
        case 17:
          _userNew = {
            _id: _user._id,
            name: _user.name,
            email: _user.email,
            userType: _user.userType,
            activeStatus: _user.activeStatus,
            slug: _user.slug
          };
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.ACCEPTED, true, {
            user: _userNew,
            token: token
          }, null));
        case 19:
          userNew = {
            _id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            activeStatus: user.activeStatus,
            slug: user.slug
          };
          if (!user.activeStatus) {
            _context3.next = 29;
            break;
          }
          _context3.next = 23;
          return (0, _token2.createToken)(user);
        case 23:
          _token = _context3.sent;
          if (!_token) {
            _context3.next = 26;
            break;
          }
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.ACCEPTED, true, {
            user: userNew,
            token: _token
          }, null));
        case 26:
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "Could not login"));
        case 29:
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.NOT_ACCEPTABLE, false, {}, "Tài khoản đã bị khóa"));
        case 30:
          _context3.next = 35;
          break;
        case 32:
          _context3.prev = 32;
          _context3.t0 = _context3["catch"](4);
          return _context3.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR, false, {}, _context3.t0.message));
        case 35:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 32]]);
  }));
  return function loginGoogle(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var reAuth = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var token, result, user, newToken, userNew;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          token = req.body.token;
          if (token) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "No Token Found"));
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return (0, _protected.verifyToken)(token);
        case 6:
          result = _context4.sent;
          if (!result) {
            _context4.next = 21;
            break;
          }
          _context4.next = 10;
          return _userModel["default"].findById(result._id);
        case 10:
          user = _context4.sent;
          if (!(!user || !user.activeStatus)) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "Could not authenticate"));
        case 13:
          _context4.next = 15;
          return (0, _token2.createToken)(user);
        case 15:
          newToken = _context4.sent;
          userNew = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            userType: user.userType,
            activeStatus: user.activeStatus,
            slug: user.slug,
            courses: user.courses
          };
          if (!newToken) {
            _context4.next = 19;
            break;
          }
          return _context4.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.OK, true, {
            user: userNew,
            token: newToken
          }, null));
        case 19:
          _context4.next = 22;
          break;
        case 21:
          return _context4.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.BAD_REQUEST, false, {}, "Please Login Again"));
        case 22:
          _context4.next = 27;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](3);
          return _context4.abrupt("return", (0, _response.response)(res, _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR, false, {}, _context4.t0.message));
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 24]]);
  }));
  return function reAuth(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
var authController = {
  login: login,
  register: register,
  loginGoogle: loginGoogle,
  reAuth: reAuth
};
exports.authController = authController;