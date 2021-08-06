import express from "express";
import listmybatchController from "../../batch/controller/listmybatch-controller";

/* This module is a route handler for API /api/pesto/list/mybatch/:userID */

const listmybatchRouter = express.Router();
listmybatchRouter.get("/:userID", listmybatchController);

export default listmybatchRouter;
