"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _mimeTypes = _interopRequireDefault(require("mime-types"));
var _sharp = _interopRequireDefault(require("sharp"));
var _core = require("@gltf-transform/core");
var _extensions = require("@gltf-transform/extensions");
var _functions = require("@gltf-transform/functions");
var _draco3dgltf = _interopRequireDefault(require("draco3dgltf"));
var _fluentFfmpeg = _interopRequireDefault(require("fluent-ffmpeg"));
var _ffmpeg = _interopRequireDefault(require("@ffmpeg-installer/ffmpeg"));
var _ffprobe = _interopRequireDefault(require("@ffprobe-installer/ffprobe"));
// Image

// 3d

// Video

_fluentFfmpeg["default"].setFfmpegPath(_ffmpeg["default"].path);
_fluentFfmpeg["default"].setFfprobePath(_ffprobe["default"].path);
var uploadDir = _path["default"].join(__dirname, '../public/uploads/image');
var uploadDirOut = _path["default"].join(__dirname, '../public/uploads/test');
var uploadDir3d = _path["default"].join(__dirname, '../public/uploads/3d');

// const file = async (req, res, next) => {
//     try {
//         const { folder } = req.body;
//         console.log(folder);

//         const file = req.file.path;
//         const fileName = req.file.filename
//         const fileNameOutput = `compress-${fileName}`;

//         if (!file) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Không có File được tải lên' });
//         const outputPath = path.join(uploadDir, fileNameOutput);

//         const fileSize = req.file.size;
//         if (fileSize > 4 * 1024 * 1024) {
//             await sharp(fs.readFileSync(file))
//                 .toFormat('jpeg')
//                 .jpeg({ quality: 100 })
//                 .toFile(outputPath);
//             await fs.promises.unlink(file);
//             res.status(StatusCodes.OK).json(fileNameOutput);
//         } else {
//             res.status(StatusCodes.OK).json(fileName);
//         }

//         // const metadata = await sharp(file).metadata();
//         // console.log(metadata);

//         // await sharp(fs.readFileSync(file))
//         //     .toFormat('jpeg')
//         //     .jpeg({ quality: 100 })
//         //     .toFile(outputPath);
//         // await fs.promises.unlink(file);
//         // res.status(StatusCodes.OK).json(fileNameOutput);

//         // if (metadata.width > 1300) {
//         //     await sharp(fs.readFileSync(file))
//         //         .resize({ width: 1200 })
//         //         .toFormat('jpeg')
//         //         .jpeg({ quality: 100 })
//         //         .toFile(outputPath);
//         //     await fs.promises.unlink(file);
//         //     res.status(StatusCodes.OK).json(fileNameOutput);
//         // } else {
//         //     res.status(StatusCodes.OK).json(fileName);
//         // }
//     } catch (error) {
//         next(error);
//     }
// }

var file = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var folder, _file, fileName, fileNameOutput, folderPath, outputPath, fileSize, newFilePath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          folder = req.body.folder;
          if (folder) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Folder name is required'
          }));
        case 4:
          _file = req.file.path;
          fileName = req.file.filename;
          fileNameOutput = "compress-".concat(fileName);
          if (_file) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Không có File được tải lên'
          }));
        case 9:
          folderPath = _path["default"].join(uploadDir, folder);
          if (_fs["default"].existsSync(folderPath)) {
            _context.next = 13;
            break;
          }
          _context.next = 13;
          return _fs["default"].promises.mkdir(folderPath, {
            recursive: true
          });
        case 13:
          outputPath = _path["default"].join(folderPath, fileNameOutput);
          fileSize = req.file.size;
          if (!(fileSize > 1 * 1024 * 1024)) {
            _context.next = 23;
            break;
          }
          _context.next = 18;
          return (0, _sharp["default"])(_fs["default"].readFileSync(_file)).toFormat('jpeg').jpeg({
            quality: 90
          }).toFile(outputPath);
        case 18:
          _context.next = 20;
          return _fs["default"].promises.unlink(_file);
        case 20:
          res.status(_httpStatusCodes.StatusCodes.OK).json("image/".concat(folder, "/").concat(fileNameOutput));
          _context.next = 27;
          break;
        case 23:
          newFilePath = _path["default"].join(folderPath, fileName);
          _context.next = 26;
          return _fs["default"].promises.rename(_file, newFilePath);
        case 26:
          res.status(_httpStatusCodes.StatusCodes.OK).json("image/".concat(folder, "/").concat(fileName));
        case 27:
          _context.next = 32;
          break;
        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 29]]);
  }));
  return function file(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var files = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var fileLinks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!(!req.files || req.files.length === 0)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).send('Không có file nào được tải lên'));
        case 3:
          fileLinks = req.files.map(function (file) {
            return file.filename;
          });
          res.status(_httpStatusCodes.StatusCodes.OK).json(fileLinks);
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
  return function files(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var file3d = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _file2, io, document, backfaceCulling, outputFilePath;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _file2 = req.file.path;
          if (_file2) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'File not found'
          }));
        case 4:
          _context3.t0 = new _core.NodeIO().registerExtensions(_extensions.ALL_EXTENSIONS);
          _context3.next = 7;
          return _draco3dgltf["default"].createDecoderModule();
        case 7:
          _context3.t1 = _context3.sent;
          _context3.next = 10;
          return _draco3dgltf["default"].createEncoderModule();
        case 10:
          _context3.t2 = _context3.sent;
          _context3.t3 = {
            'draco3d.decoder': _context3.t1,
            'draco3d.encoder': _context3.t2
          };
          io = _context3.t0.registerDependencies.call(_context3.t0, _context3.t3);
          _context3.next = 15;
          return io.read(_file2);
        case 15:
          document = _context3.sent;
          backfaceCulling = function backfaceCulling(options) {
            return function (document) {
              document.getRoot().listMaterials().forEach(function (material) {
                material.setDoubleSided(!options.cull);
              });
            };
          };
          _context3.next = 19;
          return document.transform((0, _functions.dedup)(), (0, _functions.resample)(), (0, _functions.prune)(), (0, _functions.draco)(), (0, _functions.textureCompress)({
            encoder: _sharp["default"],
            targetFormat: 'webp'
          }), (0, _functions.center)({
            pivot: 'below'
          }), backfaceCulling({
            cull: false
          }));
        case 19:
          outputFilePath = _path["default"].join(uploadDir3d, _path["default"].basename(_file2));
          _context3.next = 22;
          return io.write(outputFilePath, document);
        case 22:
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            message: 'Đã tối ưu file glb',
            file: _path["default"].basename(_file2)
          });
          _context3.next = 28;
          break;
        case 25:
          _context3.prev = 25;
          _context3.t4 = _context3["catch"](0);
          next(_context3.t4);
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 25]]);
  }));
  return function file3d(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var fileVideo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _file3, outputPath;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _file3 = req.file.path;
          if (_file3) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Không có File được tải lên'
          }));
        case 4:
          outputPath = _path["default"].join(_path["default"].dirname(_file3), 'optimized-' + _path["default"].basename(_file3));
          (0, _fluentFfmpeg["default"])(_file3).videoCodec('libx264').outputOptions(['-crf 23',
          // Constant Rate Factor (CRF) từ 0 (chất lượng cao nhất) đến 51 (chất lượng thấp nhất)
          '-preset faster',
          // Preset encoding (slower cho chất lượng tốt hơn nhưng thời gian xử lý lâu hơn)
          '-profile:v high',
          // Profile video (high cho chất lượng cao)
          '-level 4.0', '-movflags +faststart',
          // Cho phép phát video nhanh hơn trên web
          '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2' // Đảm bảo kích thước chẵn (yêu cầu của một số codec)
          ]).audioCodec('aac').audioBitrate('128k').on('end', function () {
            _fs["default"].unlinkSync(_file3);
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              file: outputPath
            });
          }).on('error', function (err) {
            next(err);
          }).save(outputPath);
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
  return function fileVideo(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// const fileBase64 = async (req, res, next) => {
//     try {
//         const { base64, folder } = req.body;
//         console.log(folder);

//         if (!base64) {
//             return res.status(StatusCodes.BAD_REQUEST).send('Base64 data is required');
//         }

//         const mimeTypeMatch = base64.match(/^data:(.+);base64,/);
//         if (!mimeTypeMatch) {
//             return res.status(StatusCodes.BAD_REQUEST).send('Invalid base64 data');
//         }

//         const mimeType = mimeTypeMatch[1];
//         const extension = mime.extension(mimeType);

//         if (!extension) {
//             return res.status(StatusCodes.BAD_REQUEST).send('Unsupported file type');
//         }

//         const filename = `${new Date().toISOString().replace(/[:.]/g, '-')}.${extension}`;
//         const filePath = path.join(uploadDir, filename);
//         const fileData = Buffer.from(base64.replace(/^data:.+;base64,/, ''), 'base64');

//         await sharp(fileData)
//             .toFormat('jpeg')
//             .jpeg({ quality: 80 })
//             .toFile(filePath);

//         res.status(StatusCodes.OK).json({
//             message: 'Lưu file thành công',
//             file: `${filename}`
//         });
//     } catch (error) {
//         next(error);
//     }
// };

var fileBase64 = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$body, base64, folder, mimeTypeMatch, mimeType, extension, filename, folderPath, base64FolderPath, filePath, fileData;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body = req.body, base64 = _req$body.base64, folder = _req$body.folder;
          if (base64) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).send('Base64 data is required'));
        case 4:
          mimeTypeMatch = base64.match(/^data:(.+);base64,/);
          if (mimeTypeMatch) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).send('Invalid base64 data'));
        case 7:
          mimeType = mimeTypeMatch[1];
          extension = _mimeTypes["default"].extension(mimeType);
          if (extension) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).send('Unsupported file type'));
        case 11:
          filename = "".concat(new Date().toISOString().replace(/[:.]/g, '-'), ".").concat(extension);
          folderPath = _path["default"].join(uploadDir, folder);
          base64FolderPath = _path["default"].join(folderPath, 'base64');
          if (!_fs["default"].existsSync(folderPath)) {
            _fs["default"].mkdirSync(folderPath, {
              recursive: true
            });
          }
          if (!_fs["default"].existsSync(base64FolderPath)) {
            _fs["default"].mkdirSync(base64FolderPath, {
              recursive: true
            });
          }

          // Đường dẫn cuối cùng để lưu file
          filePath = _path["default"].join(base64FolderPath, filename);
          fileData = Buffer.from(base64.replace(/^data:.+;base64,/, ''), 'base64'); // Lưu ảnh
          _context5.next = 20;
          return (0, _sharp["default"])(fileData).toFormat('jpeg').jpeg({
            quality: 80
          }).toFile(filePath);
        case 20:
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            message: 'Lưu file thành công',
            file: "image/".concat(folder, "/base64/").concat(filename)
          });
          _context5.next = 26;
          break;
        case 23:
          _context5.prev = 23;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 26:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 23]]);
  }));
  return function fileBase64(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var fileCompressFolder = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var _files;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _files = _fs["default"].readdirSync(uploadDir);
          _context7.next = 4;
          return Promise.all(_files.map( /*#__PURE__*/function () {
            var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(file) {
              var filePath, stats, fileSizeInBytes, fileSizeInMB, tempOutputPath;
              return _regenerator["default"].wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    filePath = _path["default"].join(uploadDir, file);
                    stats = _fs["default"].statSync(filePath);
                    fileSizeInBytes = stats.size;
                    fileSizeInMB = fileSizeInBytes / (1024 * 1024);
                    if (!(fileSizeInMB > 4)) {
                      _context6.next = 9;
                      break;
                    }
                    tempOutputPath = _path["default"].join(uploadDirOut, "".concat(file));
                    _context6.next = 8;
                    return (0, _sharp["default"])(filePath).toFormat('jpeg').jpeg({
                      quality: 100
                    }).toFile(tempOutputPath);
                  case 8:
                    _fs["default"].renameSync(tempOutputPath, filePath);
                  case 9:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return function (_x19) {
              return _ref7.apply(this, arguments);
            };
          }()));
        case 4:
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            message: 'Tất cả ảnh đã được xử lý thành công'
          });
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
  return function fileCompressFolder(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
var uploadController = {
  file: file,
  files: files,
  file3d: file3d,
  fileVideo: fileVideo,
  fileBase64: fileBase64,
  fileCompressFolder: fileCompressFolder
};
exports.uploadController = uploadController;