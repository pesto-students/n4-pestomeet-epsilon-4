import express, { Router } from "express";
import createassignmentController from "../controller/createassignment-controller";

/* This module is a route handler for API /api/pesto/create/assignment */

const createassignmentRouter: Router = express.Router();
createassignmentRouter.post("/", createassignmentController);

export default createassignmentRouter;
