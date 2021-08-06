import express from "express";
import listannouncementController from "../controller/listannouncement-controller";

/* This module is a route handler for API /api/pesto/list/announcement */

const listannouncementRouter = express.Router();
listannouncementRouter.get("/", listannouncementController);
export default listannouncementRouter;
