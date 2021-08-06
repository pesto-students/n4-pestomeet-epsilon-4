import express from "express";
import deleteeventController from "../controller/deleteevent-controller";

/* This module is a route handler for API /api/pesto/delete/event */

const deleteeventRouter = express.Router();
deleteeventRouter.delete("/:id", deleteeventController);

export default deleteeventRouter;
