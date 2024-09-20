"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customPageRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _customPageController = require("../../controllers/customPageController");
var Router = _express["default"].Router();
Router.route("/masonry").post(_customPageController.maronryController.addMasonry);
Router.route("/masonry/:slug").get(_customPageController.maronryController.sigMasonry).put(_customPageController.maronryController.putMasonry)["delete"](_customPageController.maronryController.delMasonry);
var customPageRouter = Router;
exports.customPageRouter = customPageRouter;