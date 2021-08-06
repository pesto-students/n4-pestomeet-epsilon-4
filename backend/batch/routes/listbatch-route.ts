import express from "express";
import listbatchController from "../../batch/controller/listbatch-controller";

/* This module is a route handler for API /api/pesto/list/batch/:type */

const listbatchRouter = express.Router();
listbatchRouter.get("/:type", listbatchController);

export default listbatchRouter;
