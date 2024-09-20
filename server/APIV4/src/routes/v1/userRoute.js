"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../../controllers/userController.js");
var Router = _express["default"].Router();
Router.route("/").get(_userController.userController.allUser);
Router.route("/:id").get(_userController.userController.singleUser)["delete"](_userController.userController.deleteUser).put(_userController.userController.updateUser);
Router.route("/course/:id").put(_userController.userController.updateCourse);
var userRouter = Router;
exports.userRouter = userRouter;