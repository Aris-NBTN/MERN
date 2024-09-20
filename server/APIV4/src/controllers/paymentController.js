"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _axios = _interopRequireDefault(require("axios"));
var _crypto = _interopRequireDefault(require("crypto"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _moment = _interopRequireDefault(require("moment"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _qs = _interopRequireDefault(require("qs"));
var _node = _interopRequireDefault(require("@payos/node"));
var _constants = require("../utils/constants");
// Zalopay

// VNPay
// import config from 'config';
// import dateFormat from 'dateformat';
// VietQR
// const filePath = path.resolve(__dirname, '../json/info.json');
var YOUR_CLIENT_ID = '7de09ded-b671-4cdd-9c7c-ee56416f15be';
var YOUR_API_KEY = '8195937f-acc1-4fa5-b6ed-e8f3bafb9f7e';
var YOUR_CHECKSUM_KEY = 'dad2de38dff40c99344ce28ca6a0ae7950bbd5fa8d7e88082f701d139e78fb37';
var payOS = new _node["default"](YOUR_CLIENT_ID, YOUR_API_KEY, YOUR_CHECKSUM_KEY);
var payWithMoMo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function payWithMoMo(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var payWithZaloPay = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function payWithZaloPay(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var payWithVNPay = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function payWithVNPay(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var createQRPayment = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$body, BANKID, ACCOUNT, PRICE, DESCRIPTION, QuickLink;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          // {
          //     "BANKID": "970422",
          //     "ACCOUNT": "0918685740",
          //     "PRICE": "1000",
          //     "DESCRIPTION": "HAHA"
          // }
          _req$body = req.body, BANKID = _req$body.BANKID, ACCOUNT = _req$body.ACCOUNT, PRICE = _req$body.PRICE, DESCRIPTION = _req$body.DESCRIPTION;
          QuickLink = "https://img.vietqr.io/image/".concat(BANKID, "-").concat(ACCOUNT, "-compact2.png?amount=").concat(PRICE, "&addInfo=").concat(DESCRIPTION);
          _context4.prev = 2;
          return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.CREATED).json(QuickLink));
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](2);
          next(_context4.t0);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 6]]);
  }));
  return function createQRPayment(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var testPayment = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var YOUR_DOMAIN, _req$body2, id, product, total, body, paymentLinkResponse;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          YOUR_DOMAIN = "http://localhost:5173";
          _req$body2 = req.body, id = _req$body2.id, product = _req$body2.product, total = _req$body2.total;
          if (id) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: "ERROR ID"
          }));
        case 4:
          if (product) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: "ERROR PRODUCT"
          }));
        case 6:
          if (total) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: "ERROR TOTAL"
          }));
        case 8:
          body = {
            orderCode: id,
            amount: total,
            items: product,
            description: "Thanh toan don hang",
            returnUrl: "".concat(YOUR_DOMAIN, "/success"),
            cancelUrl: "".concat(YOUR_DOMAIN, "/cancel")
          };
          _context5.prev = 9;
          _context5.next = 12;
          return payOS.createPaymentLink(body);
        case 12:
          paymentLinkResponse = _context5.sent;
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.CREATED).json({
            url: paymentLinkResponse.checkoutUrl
          }));
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](9);
          next(_context5.t0);
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[9, 16]]);
  }));
  return function testPayment(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var checkPayment = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var webhookData, updateOrder, response, products, productIds, updateUser;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          webhookData = payOS.verifyPaymentWebhookData(req.body);
          console.log(webhookData);
          res.status(_httpStatusCodes.StatusCodes.OK).json(webhookData);
          if (!(code == '00')) {
            _context6.next = 22;
            break;
          }
          updateOrder = {
            status: true,
            paymentMethod: 'Chuyển Khoản Ngân Hàng'
          };
          _context6.prev = 5;
          _context6.next = 8;
          return _axios["default"].put("".concat(_constants.BaseServer, "/v1/order/").concat(webhookData.orderCode), updateOrder);
        case 8:
          response = _context6.sent;
          products = response.data.product;
          productIds = products.map(function (product) {
            return product.id;
          });
          _context6.next = 13;
          return _axios["default"].put("".concat(_constants.BaseServer, "/v1/user/course/").concat(response.data.idUser), {
            courses: productIds
          });
        case 13:
          updateUser = _context6.sent;
          return _context6.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json(updateUser));
        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](5);
          return _context6.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: "Không có khóa học nào được cập nhập"
          }));
        case 20:
          _context6.next = 23;
          break;
        case 22:
          return _context6.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
            message: "OK"
          }));
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 17]]);
  }));
  return function checkPayment(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
var paymentController = {
  payWithMoMo: payWithMoMo,
  payWithZaloPay: payWithZaloPay,
  payWithVNPay: payWithVNPay,
  createQRPayment: createQRPayment,
  testPayment: testPayment,
  checkPayment: checkPayment
};
exports.paymentController = paymentController;