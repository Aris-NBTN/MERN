"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var sendMail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, email, subject, content, filePath, rawdata, jsonData, _jsonData$info, googleEmail, googlePassword, googleTitle, websiteName, transporter;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, subject = _req$body.subject, content = _req$body.content;
          filePath = _path["default"].join(__dirname, '../json/info.json');
          rawdata = _fs["default"].readFileSync(filePath);
          jsonData = JSON.parse(rawdata);
          _jsonData$info = jsonData.info, googleEmail = _jsonData$info.googleEmail, googlePassword = _jsonData$info.googlePassword, googleTitle = _jsonData$info.googleTitle, websiteName = _jsonData$info.websiteName;
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: googleEmail || process.env.EMAIL_USER,
              pass: googlePassword || process.env.EMAIL_PASS
            }
          });
          _context.next = 9;
          return transporter.sendMail({
            from: "\"".concat(googleTitle || websiteName, "\" <").concat(googleEmail || process.env.EMAIL_USER, ">"),
            to: email,
            subject: subject,
            html: content
          });
        case 9:
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            message: 'Đã gửi email'
          });
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function sendMail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var emailController = {
  sendMail: sendMail
};
exports.emailController = emailController;