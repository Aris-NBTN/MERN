"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchCourserController = exports.courserController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _coursesModel = _interopRequireDefault(require("../models/coursesModel.js"));
var _indexControllder = require("./indexControllder.js");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _httpStatusCodes = require("http-status-codes");
var _sharp = _interopRequireDefault(require("sharp"));
// Image

var nameMess = 'Khóa học';
var uploadDir = _path["default"].join(__dirname, '../public/uploads/course');
var sigCourser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var slug, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          slug = req.params.slug;
          _context.next = 4;
          return (0, _indexControllder.getSigData)(nameMess, {
            slug: slug
          }, _coursesModel["default"], {
            populate: 'category'
          });
        case 4:
          results = _context.sent;
          res.status(results.status).json(results.message);
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function sigCourser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var addCourser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _indexControllder.addData)(nameMess, _coursesModel["default"], req.body, {
            uniqueField: 'name',
            customSlugField: 'name'
          });
        case 3:
          result = _context2.sent;
          res.status(result.status).json({
            message: result.message,
            newData: result.data
          });
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
  return function addCourser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var putCourser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return (0, _indexControllder.updateData)(nameMess, _coursesModel["default"], id, req.body, {
            uniqueField: 'name'
          });
        case 4:
          result = _context3.sent;
          res.status(result.status).json({
            message: result.message,
            newData: result.data
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
  return function putCourser(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var delCourser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _indexControllder.deleteData)(nameMess, _coursesModel["default"], id);
        case 4:
          result = _context4.sent;
          res.status(result.status).json({
            message: result.message,
            _id: id
          });
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
  return function delCourser(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var allCourserAdmin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var results;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _indexControllder.getData)(nameMess, _coursesModel["default"], {
            sort: {
              createdAt: -1
            }
          });
        case 3:
          results = _context5.sent;
          res.status(results.status).json(results.message);
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function allCourserAdmin(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var allCourser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var results;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _indexControllder.getData)(nameMess, _coursesModel["default"], {
            sort: {
              createdAt: -1
            },
            populate: 'category',
            select: '_id name price status title category slug sale'
          });
        case 3:
          results = _context6.sent;
          res.status(results.status).json(results.message);
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function allCourser(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
var outstandCourse = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var courses;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _coursesModel["default"].aggregate([{
            $sample: {
              size: 6
            }
          }]);
        case 3:
          courses = _context7.sent;
          res.status(200).json(courses);
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function outstandCourse(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
var allCourserCart = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var ids, courses;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          ids = req.body.ids;
          if (Array.isArray(ids)) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: 'Lỗi ID là 1 mảng'
          }));
        case 4:
          _context8.next = 6;
          return _coursesModel["default"].find({
            _id: {
              $in: ids
            }
          }).select('_id name price sale slug');
        case 6:
          courses = _context8.sent;
          res.status(200).json(courses);
          _context8.next = 13;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function allCourserCart(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();
var searchCourses = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var _req$query, priceRange, categoryId, query, results, _priceRange$split$map, _priceRange$split$map2, minPrice, maxPrice;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$query = req.query, priceRange = _req$query['price-course'], categoryId = _req$query['category-course'];
          query = {}; // Xử lý theo category nếu có
          if (categoryId) {
            query.category = categoryId;
          }

          // Query khóa học và tính toán giá đã giảm
          _context9.next = 6;
          return _coursesModel["default"].find(query).sort({
            createdAt: -1
          }).populate('category').select('_id name price status title category slug sale');
        case 6:
          results = _context9.sent;
          // Nếu có priceRange, lọc theo giá đã giảm
          if (priceRange) {
            _priceRange$split$map = priceRange.split('-').map(Number), _priceRange$split$map2 = (0, _slicedToArray2["default"])(_priceRange$split$map, 2), minPrice = _priceRange$split$map2[0], maxPrice = _priceRange$split$map2[1]; // Tính giá đã giảm và lọc kết quả
            results = results.filter(function (course) {
              var finalPrice = course.price - course.price * course.sale / 100;
              return finalPrice >= minPrice && finalPrice <= maxPrice;
            });
          }
          res.status(200).json(results);
          _context9.next = 14;
          break;
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return function searchCourses(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();
var addImageCourses = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var folder, file, fileName, fileNameOutput, folderPath, outputPath, fileSize, newFilePath;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          folder = req.body.folder;
          if (folder) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Folder name is required'
          }));
        case 4:
          file = req.file.path;
          fileName = req.file.filename;
          fileNameOutput = "compress-".concat(fileName);
          if (file) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Không có File được tải lên'
          }));
        case 9:
          folderPath = _path["default"].join(uploadDir, folder);
          if (_fs["default"].existsSync(folderPath)) {
            _context10.next = 13;
            break;
          }
          _context10.next = 13;
          return _fs["default"].promises.mkdir(folderPath, {
            recursive: true
          });
        case 13:
          outputPath = _path["default"].join(folderPath, fileNameOutput);
          fileSize = req.file.size;
          if (!(fileSize > 1 * 1024 * 1024)) {
            _context10.next = 23;
            break;
          }
          _context10.next = 18;
          return (0, _sharp["default"])(_fs["default"].readFileSync(file)).toFormat('jpeg').jpeg({
            quality: 80
          }).toFile(outputPath);
        case 18:
          _context10.next = 20;
          return _fs["default"].promises.unlink(file);
        case 20:
          res.status(_httpStatusCodes.StatusCodes.OK).json("course/".concat(folder, "/").concat(fileNameOutput));
          _context10.next = 27;
          break;
        case 23:
          newFilePath = _path["default"].join(folderPath, fileName);
          _context10.next = 26;
          return _fs["default"].promises.rename(file, newFilePath);
        case 26:
          res.status(_httpStatusCodes.StatusCodes.OK).json("course/".concat(folder, "/").concat(fileName));
        case 27:
          _context10.next = 32;
          break;
        case 29:
          _context10.prev = 29;
          _context10.t0 = _context10["catch"](0);
          next(_context10.t0);
        case 32:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 29]]);
  }));
  return function addImageCourses(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();
var courserController = {
  sigCourser: sigCourser,
  addCourser: addCourser,
  allCourser: allCourser,
  allCourserAdmin: allCourserAdmin,
  putCourser: putCourser,
  delCourser: delCourser,
  allCourserCart: allCourserCart,
  outstandCourse: outstandCourse,
  addImageCourses: addImageCourses
};
exports.courserController = courserController;
var searchCourserController = {
  searchCourses: searchCourses
};
exports.searchCourserController = searchCourserController;