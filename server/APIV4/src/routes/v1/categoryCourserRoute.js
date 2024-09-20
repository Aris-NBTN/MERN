"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryCourserRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoryCourseController = require("../../controllers/categoryCourseController");
var Router = _express["default"].Router();
Router.route("/").get(_categoryCourseController.categoryCourserController.allCategory).post(_categoryCourseController.categoryCourserController.addCategory);
Router.route("/:id")["delete"](_categoryCourseController.categoryCourserController.delCategory).put(_categoryCourseController.categoryCourserController.putCategory);
var categoryCourserRouter = Router;
exports.categoryCourserRouter = categoryCourserRouter;