import express, { Router } from "express";
import deleteassignmentController from "../controller/deleteassignment-controller";

/* This module is a route handler for API /api/pesto/delete/assignment/:id*/

const deleteassignmentRouter: Router = express.Router();
deleteassignmentRouter.delete("/:id", deleteassignmentController);

export default deleteassignmentRouter;
