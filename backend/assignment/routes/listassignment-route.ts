import express from "express";
import listeventController from "../controller/listassignment-controller";

/* This module is a route handler for API /api/pesto/list/assignment/:eventId */

const listassignmentRouter = express.Router();
listassignmentRouter.get("/:eventID", listeventController);
export default listassignmentRouter;
