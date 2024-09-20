"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileManagerRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _fileManagerControllder = require("../../controllers/fileManagerControllder");
var Router = _express["default"].Router();
Router.route("/").get(_fileManagerControllder.fileManagerController.allFile);
Router.route("/folder").post(_fileManagerControllder.folderManagerController.addFolder).put(_fileManagerControllder.folderManagerController.renameFolder)["delete"](_fileManagerControllder.folderManagerController.deleteFolder);
Router.route("/filter").post(_fileManagerControllder.fileManagerController.filterFileType);
Router.route("/files-in-folder").post(_fileManagerControllder.fileManagerController.filesInFolder);
Router.route("/images").get(_fileManagerControllder.fileManagerController.getAllImages);
var fileManagerRouter = Router;
exports.fileManagerRouter = fileManagerRouter;