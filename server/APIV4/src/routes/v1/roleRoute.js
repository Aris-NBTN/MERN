"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _roleController = require("../../controllers/roleController.js");
var Router = _express["default"].Router();
Router.route("/").get(_roleController.roleController.allRole).post(_roleController.roleController.addRole);
Router.route("/:id")["delete"](_roleController.roleController.delRole).put(_roleController.roleController.putRole);
var roleRouter = Router;
exports.roleRouter = roleRouter;