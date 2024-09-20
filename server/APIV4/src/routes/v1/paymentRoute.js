"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _paymentController = require("../../controllers/paymentController");
var Router = _express["default"].Router();
Router.route("/momo").post(_paymentController.paymentController.payWithMoMo);
Router.route("/zalopay").post(_paymentController.paymentController.payWithZaloPay);
Router.route("/vnpay").post(_paymentController.paymentController.payWithVNPay);
Router.route("/create-qr-payment").post(_paymentController.paymentController.createQRPayment);
Router.route("/bank").post(_paymentController.paymentController.testPayment);
Router.route("/check-bank").post(_paymentController.paymentController.checkPayment);
var paymentRouter = Router;
exports.paymentRouter = paymentRouter;