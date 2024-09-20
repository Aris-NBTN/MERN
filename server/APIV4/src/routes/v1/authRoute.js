"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../../controllers/authController.js");
var _authValidation = require("../../validations/authValidation.js");
var Router = _express["default"].Router();
Router.route("/login").post(_authValidation.authValidation.login, _authController.authController.login);
Router.route("/login-google").post(_authController.authController.loginGoogle);
Router.route("/register").post(_authValidation.authValidation.register, _authController.authController.register);
Router.route("/reauth").post(_authController.authController.reAuth);
var authRouter = Router;
exports.authRouter = authRouter;