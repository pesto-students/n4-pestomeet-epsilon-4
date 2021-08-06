import express from "express";
import listmyeventController from "../controller/listmyevent-controller";

/* This module is a route handler for API /api/pesto/list/myevent */

const listmyeventRouter = express.Router();
listmyeventRouter.get("/:userID", listmyeventController);
export default listmyeventRouter;
