"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupPageRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _groupPageController = require("../../controllers/groupPageController.js");
var Router = _express["default"].Router();
Router.route("/").get(_groupPageController.groupPageController.allGroup).post(_groupPageController.groupPageController.addGroup);
Router.route("/:id")["delete"](_groupPageController.groupPageController.delGroup).put(_groupPageController.groupPageController.putGroup);
var groupPageRouter = Router;
exports.groupPageRouter = groupPageRouter;