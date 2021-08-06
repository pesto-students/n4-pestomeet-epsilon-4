import express, { Router } from "express";
import createannouncementController from "../controller/createannouncement-controller";

/* This module is a route handler for API /api/pesto/create/announcement */

const createannouncementRouter: Router = express.Router();
createannouncementRouter.post("/", createannouncementController);

export default createannouncementRouter;
