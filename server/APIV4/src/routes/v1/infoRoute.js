"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _infoController = require("../../controllers/infoController");
var Router = _express["default"].Router();
Router.route("/").get(_infoController.infoController.allInfo).post(_infoController.infoController.updateInfo);
var infoRouter = Router;
exports.infoRouter = infoRouter;