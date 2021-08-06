import express, { Router } from "express";
import deleteannouncementController from "../controller/deleteannouncement-controller";

/* This module is a route handler for API /api/pesto/delete/announcement/:id */

const deleteannouncementRouter: Router = express.Router();
deleteannouncementRouter.delete("/:id", deleteannouncementController);

export default deleteannouncementRouter;
