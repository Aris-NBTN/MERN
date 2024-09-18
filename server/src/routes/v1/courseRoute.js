import express from 'express';
import { courserController, searchCourserController } from '~/controllers/courseController';

const Router = express.Router();

Router.route("/")
    .get(courserController.allCourser)

Router.route("/outstand")
    .get(courserController.outstandCourse)

Router.route("/search").get(searchCourserController.searchCourses);

Router.route("/slug/:slug")
    .get(courserController.sigCourser)

Router.route("/courser-admin/")
    .get(courserController.allCourserAdmin)
    .post(courserController.addCourser)

Router.route("/cart/")
    .post(courserController.allCourserCart)

Router.route("/:id")
    .get(courserController.sigCourser)
    .delete(courserController.delCourser)
    .put(courserController.putCourser)

export const courserRouter = Router;