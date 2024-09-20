"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.courserRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _courseController = require("../../controllers/courseController");
var _fileMiddleware = _interopRequireDefault(require("../../middlewares/fileMiddleware.js"));
var Router = _express["default"].Router();
Router.route("/").get(_courseController.courserController.allCourser);
Router.route("/outstand").get(_courseController.courserController.outstandCourse);
Router.route("/search").get(_courseController.searchCourserController.searchCourses);
Router.route("/slug/:slug").get(_courseController.courserController.sigCourser);
Router.route("/courser-admin/").get(_courseController.courserController.allCourserAdmin).post(_courseController.courserController.addCourser);
Router.route("/cart/").post(_courseController.courserController.allCourserCart);
Router.route("/:id").get(_courseController.courserController.sigCourser)["delete"](_courseController.courserController.delCourser).put(_courseController.courserController.putCourser);
Router.route("/image").post(_fileMiddleware["default"].single('file'), _courseController.courserController.addImageCourses);
var courserRouter = Router;
exports.courserRouter = courserRouter;