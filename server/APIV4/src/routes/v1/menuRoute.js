"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _menuController = require("../../controllers/menuController.js");
var Router = _express["default"].Router();
Router.route("/").get(_menuController.menuController.allMenu).put(_menuController.menuController.updateMenu);
var menuRouter = Router;
exports.menuRouter = menuRouter;