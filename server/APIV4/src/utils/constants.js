"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITELIST_DOMAINS = exports.TYPE_EMPLOYEE = exports.BaseServer = void 0;
var WHITELIST_DOMAINS = ['https://hmweb3d.com', 'http://localhost:5173', 'http://192.168.1.43:5173'];
exports.WHITELIST_DOMAINS = WHITELIST_DOMAINS;
var TYPE_EMPLOYEE = {
  admin: "admin",
  user: "user",
  doctor: "doctor",
  administrative: "administrative",
  sales: "sales"
};
exports.TYPE_EMPLOYEE = TYPE_EMPLOYEE;
var apiRoot = process.env.BUILD_MODE === 'dev' ? "http://localhost:8082" : process.env.BUILD_MODE === 'production' ? "https://server.hmweb3d.com" : '';
var BaseServer = apiRoot;
exports.BaseServer = BaseServer;