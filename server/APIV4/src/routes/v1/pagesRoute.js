"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagesRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _pagesController = require("../../controllers/pagesController.js");
var Router = _express["default"].Router();
Router.route("/").get(_pagesController.pagesController.allPage).post(_pagesController.pagesController.addPage);
Router.route("/slug/:slug").get(_pagesController.pagesController.sigPage);
Router.route("/change-text").post(_pagesController.pagesController.changeText);
Router.route("/:id").post(_pagesController.pagesController.copyPage).put(_pagesController.pagesController.putPage)["delete"](_pagesController.pagesController.delPage);
Router.route("/:page-edit/:slug").get(_pagesController.pagesController.sigPageEdit);
var pagesRouter = Router;
exports.pagesRouter = pagesRouter;