"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _orderController = require("../../controllers/orderController");
var Router = _express["default"].Router();
Router.route("/").get(_orderController.orderController.allOrder).post(_orderController.orderController.addOrder);
Router.route("/:id")["delete"](_orderController.orderController.delOrder).put(_orderController.orderController.putOrder);
Router.route("/revenue").get(_orderController.orderController.revenue);
var orderRouter = Router;
exports.orderRouter = orderRouter;