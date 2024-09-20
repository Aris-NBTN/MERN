"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluginsRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _pluginsController = require("../../controllers/pluginsController.js");
var _filePluginsMiddleware = _interopRequireDefault(require("../../middlewares/filePluginsMiddleware.js"));
var _filePluginsEVMiddleware = _interopRequireDefault(require("../../middlewares/filePluginsEVMiddleware.js"));
var Router = _express["default"].Router();
Router.route("/").get(_pluginsController.pluginsController.all).post(_filePluginsMiddleware["default"].single('filePlugins'), _pluginsController.pluginsController.addFilePlugins);
Router.route("/file").post(_filePluginsEVMiddleware["default"].array('fileEV', 5), _pluginsController.pluginsController.addFileEV);
var pluginsRouter = Router;
exports.pluginsRouter = pluginsRouter;