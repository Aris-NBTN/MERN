"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _orderModel = _interopRequireDefault(require("../models/orderModel"));
var _indexControllder = require("./indexControllder");
var _httpStatusCodes = require("http-status-codes");
var _userModel = _interopRequireDefault(require("../models/userModel"));
var nameMess = 'Đơn hàng';
var addOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _indexControllder.addData)(nameMess, _orderModel["default"], req.body, {
            uniqueField: 'orderId'
          });
        case 3:
          result = _context.sent;
          res.status(result.status).json({
            message: result.message,
            newData: result.data
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function addOrder(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var allOrder = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var results;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _indexControllder.getData)(nameMess, _orderModel["default"], {
            sort: {
              createdAt: -1
            }
          });
        case 3:
          results = _context2.sent;
          res.status(results.status).json(results.message);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function allOrder(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var delOrder = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return (0, _indexControllder.deleteData)(nameMess, _orderModel["default"], id);
        case 4:
          result = _context3.sent;
          res.status(result.status).json({
            message: result.message,
            _id: id
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function delOrder(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var putOrder = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, newData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _orderModel["default"].findOneAndUpdate({
            orderId: id
          }, req.body, {
            "new": true
          });
        case 4:
          newData = _context4.sent;
          res.status(_httpStatusCodes.StatusCodes.OK).json(newData);
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function putOrder(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var revenue = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var calculateTotalRevenue, calculateTotalOrders, calculateTotalOrdersWithStatus, calculateTotalUsers, today, startOfToday, endOfToday, totalRevenueAllTime, startOfWeek, endOfWeek, weeklyRevenue, startOfLastWeek, endOfLastWeek, lastWeekRevenue, revenueDifference, monthlyRevenues, month, startOfMonth, endOfMonth, monthlyRevenue, totalOrdersThisWeek, totalOrdersThisWeekWithStatus, totalOrdersLastWeek, totalOrdersLastWeekWithStatus, orderDifferenceWithStatus, totalOrdersWithStatus, dailyRevenues, i, startOfDay, endOfDay, dailyRevenue, totalUsersThisWeek, totalUsersWithStatus, startOfLastWeekUsers, endOfLastWeekUsers, totalUsersLastWeek, userDifference, totalOrdersTodayWithFalseStatus, totalOrdersToday, totalOrdersTodayWithTrueStatus;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          calculateTotalRevenue = /*#__PURE__*/function () {
            var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(startDate, endDate) {
              var orders, totalRevenue;
              return _regenerator["default"].wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _orderModel["default"].find({
                      status: true,
                      updatedAt: {
                        $gte: startDate,
                        $lte: endDate
                      }
                    });
                  case 2:
                    orders = _context5.sent;
                    totalRevenue = orders.reduce(function (total, order) {
                      var orderTotal = order.product.reduce(function (sum, product) {
                        return sum + product.price * product.quantity;
                      }, 0);
                      return total + orderTotal;
                    }, 0);
                    return _context5.abrupt("return", totalRevenue);
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function calculateTotalRevenue(_x16, _x17) {
              return _ref6.apply(this, arguments);
            };
          }();
          calculateTotalOrders = /*#__PURE__*/function () {
            var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(startDate, endDate) {
              var orders;
              return _regenerator["default"].wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _orderModel["default"].find({
                      createdAt: {
                        $gte: startDate,
                        $lte: endDate
                      }
                    });
                  case 2:
                    orders = _context6.sent;
                    return _context6.abrupt("return", orders.length);
                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return function calculateTotalOrders(_x18, _x19) {
              return _ref7.apply(this, arguments);
            };
          }();
          calculateTotalOrdersWithStatus = /*#__PURE__*/function () {
            var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(startDate, endDate) {
              var status,
                orders,
                _args7 = arguments;
              return _regenerator["default"].wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    status = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;
                    _context7.next = 3;
                    return _orderModel["default"].find({
                      status: status,
                      createdAt: {
                        $gte: startDate,
                        $lte: endDate
                      }
                    });
                  case 3:
                    orders = _context7.sent;
                    return _context7.abrupt("return", orders.length);
                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function calculateTotalOrdersWithStatus(_x20, _x21) {
              return _ref8.apply(this, arguments);
            };
          }();
          calculateTotalUsers = /*#__PURE__*/function () {
            var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(startDate, endDate) {
              var users;
              return _regenerator["default"].wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return _userModel["default"].find({
                      createdAt: {
                        $gte: startDate,
                        $lte: endDate
                      }
                    });
                  case 2:
                    users = _context8.sent;
                    return _context8.abrupt("return", users.length);
                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return function calculateTotalUsers(_x22, _x23) {
              return _ref9.apply(this, arguments);
            };
          }();
          _context9.prev = 4;
          today = new Date();
          today.setHours(0, 0, 0, 0); // Set thời gian bắt đầu của ngày hôm nay
          startOfToday = new Date(today);
          endOfToday = new Date(today);
          endOfToday.setHours(23, 59, 59, 999); // Set thời gian kết thúc của ngày hôm nay

          // Tổng doanh thu tất cả hóa đơn có trạng thái là status = true
          _context9.next = 12;
          return calculateTotalRevenue(new Date(0), new Date());
        case 12:
          totalRevenueAllTime = _context9.sent;
          // Weekly Revenue
          startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday of this week
          startOfWeek.setHours(0, 0, 0, 0);
          endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)); // Saturday of this week
          endOfWeek.setHours(23, 59, 59, 999);
          _context9.next = 19;
          return calculateTotalRevenue(startOfWeek, endOfWeek);
        case 19:
          weeklyRevenue = _context9.sent;
          // Previous Week Revenue
          startOfLastWeek = new Date(startOfWeek);
          startOfLastWeek.setDate(startOfWeek.getDate() - 7); // Start of last week
          endOfLastWeek = new Date(endOfWeek);
          endOfLastWeek.setDate(endOfWeek.getDate() - 7); // End of last week
          _context9.next = 26;
          return calculateTotalRevenue(startOfLastWeek, endOfLastWeek);
        case 26:
          lastWeekRevenue = _context9.sent;
          // Calculate the revenue difference between weeks
          revenueDifference = weeklyRevenue - lastWeekRevenue; // Tổng doanh thu của từng tháng (tháng 1 - tháng 12)
          monthlyRevenues = [];
          month = 0;
        case 30:
          if (!(month < 12)) {
            _context9.next = 41;
            break;
          }
          startOfMonth = new Date(today.getFullYear(), month, 1);
          endOfMonth = new Date(today.getFullYear(), month + 1, 0);
          endOfMonth.setHours(23, 59, 59, 999);
          _context9.next = 36;
          return calculateTotalRevenue(startOfMonth, endOfMonth);
        case 36:
          monthlyRevenue = _context9.sent;
          monthlyRevenues.push({
            month: month + 1,
            revenue: monthlyRevenue
          });
        case 38:
          month++;
          _context9.next = 30;
          break;
        case 41:
          _context9.next = 43;
          return calculateTotalOrders(startOfWeek, endOfWeek);
        case 43:
          totalOrdersThisWeek = _context9.sent;
          _context9.next = 46;
          return calculateTotalOrdersWithStatus(startOfWeek, endOfWeek);
        case 46:
          totalOrdersThisWeekWithStatus = _context9.sent;
          _context9.next = 49;
          return calculateTotalOrders(startOfLastWeek, endOfLastWeek);
        case 49:
          totalOrdersLastWeek = _context9.sent;
          _context9.next = 52;
          return calculateTotalOrdersWithStatus(startOfLastWeek, endOfLastWeek);
        case 52:
          totalOrdersLastWeekWithStatus = _context9.sent;
          // Order Difference Between Weeks
          orderDifferenceWithStatus = totalOrdersThisWeekWithStatus - totalOrdersLastWeekWithStatus; // Total Orders with Status = true
          _context9.next = 56;
          return calculateTotalOrdersWithStatus(new Date(0), new Date());
        case 56:
          totalOrdersWithStatus = _context9.sent;
          // Calculate daily revenues for this week
          dailyRevenues = [];
          i = 0;
        case 59:
          if (!(i <= today.getDay())) {
            _context9.next = 72;
            break;
          }
          startOfDay = new Date(startOfWeek);
          startOfDay.setDate(startOfWeek.getDate() + i);
          startOfDay.setHours(0, 0, 0, 0);
          endOfDay = new Date(startOfDay);
          endOfDay.setHours(23, 59, 59, 999);
          _context9.next = 67;
          return calculateTotalRevenue(startOfDay, endOfDay);
        case 67:
          dailyRevenue = _context9.sent;
          dailyRevenues.push({
            day: startOfDay.toLocaleDateString(),
            revenue: dailyRevenue
          });
        case 69:
          i++;
          _context9.next = 59;
          break;
        case 72:
          _context9.next = 74;
          return calculateTotalUsers(startOfWeek, endOfWeek);
        case 74:
          totalUsersThisWeek = _context9.sent;
          _context9.next = 77;
          return calculateTotalUsers(new Date(0), new Date());
        case 77:
          totalUsersWithStatus = _context9.sent;
          startOfLastWeekUsers = new Date(startOfLastWeek);
          startOfLastWeekUsers.setHours(0, 0, 0, 0);
          endOfLastWeekUsers = new Date(endOfLastWeek);
          endOfLastWeekUsers.setHours(23, 59, 59, 999);
          _context9.next = 84;
          return calculateTotalUsers(startOfLastWeekUsers, endOfLastWeekUsers);
        case 84:
          totalUsersLastWeek = _context9.sent;
          userDifference = totalUsersThisWeek - totalUsersLastWeek; // Đếm đơn hàng status = false trong hôm nay
          _context9.next = 88;
          return calculateTotalOrdersWithStatus(startOfToday, endOfToday, false);
        case 88:
          totalOrdersTodayWithFalseStatus = _context9.sent;
          _context9.next = 91;
          return calculateTotalOrders(startOfToday, endOfToday);
        case 91:
          totalOrdersToday = _context9.sent;
          _context9.next = 94;
          return calculateTotalOrdersWithStatus(startOfToday, endOfToday, true);
        case 94:
          totalOrdersTodayWithTrueStatus = _context9.sent;
          res.status(200).json({
            revenue: {
              totalRevenueAllTime: totalRevenueAllTime,
              // Tổng doanh thu tất cả hóa đơn status = true
              weeklyRevenue: weeklyRevenue,
              dailyRevenues: dailyRevenues,
              revenueDifference: revenueDifference,
              // Chênh lệch doanh thu tuần này so với tuần trước
              monthlyRevenues: monthlyRevenues // Tổng doanh thu theo tháng từ tháng 1 đến tháng 12
            },

            orders: {
              totalOrdersThisWeekWithStatus: totalOrdersThisWeekWithStatus,
              orderDifferenceWithStatus: orderDifferenceWithStatus,
              totalOrdersWithStatus: totalOrdersWithStatus,
              totalOrdersToday: totalOrdersToday,
              // Tổng số đơn hàng đã tạo trong hôm nay
              totalOrdersTodayWithFalseStatus: totalOrdersTodayWithFalseStatus,
              // Đơn hàng status = false trong hôm nay
              totalOrdersTodayWithTrueStatus: totalOrdersTodayWithTrueStatus // Đơn hàng status = true trong hôm nay
            },

            users: {
              totalUsersThisWeek: totalUsersThisWeek,
              totalUsersWithStatus: totalUsersWithStatus,
              userDifference: userDifference
            }
          });
          _context9.next = 101;
          break;
        case 98:
          _context9.prev = 98;
          _context9.t0 = _context9["catch"](4);
          next(_context9.t0);
        case 101:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[4, 98]]);
  }));
  return function revenue(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var orderController = {
  addOrder: addOrder,
  allOrder: allOrder,
  delOrder: delOrder,
  putOrder: putOrder,
  revenue: revenue
};
exports.orderController = orderController;