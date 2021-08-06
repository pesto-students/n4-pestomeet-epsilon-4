import express from "express";
import listresourceController from "../controller/listresource-controller";

/* This module is a route handler for API /api/pesto/resource/list/eventId */

const listresourceRouter = express.Router();
listresourceRouter.get("/:eventId", listresourceController);

export default listresourceRouter;
