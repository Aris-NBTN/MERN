"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mailRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _mailController = require("../../controllers/mailController");
var Router = _express["default"].Router();
Router.route("/").post(_mailController.emailController.sendMail);
var mailRouter = Router;
exports.mailRouter = mailRouter;