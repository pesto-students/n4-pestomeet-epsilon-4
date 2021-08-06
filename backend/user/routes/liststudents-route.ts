import express from "express";
import listStudentController from "../controller/liststudents-controller";

/* This module is a route handler for API /api/pesto/list/students */

const listStudentRouter = express.Router();
listStudentRouter.get("/:userID", listStudentController);

export default listStudentRouter;
