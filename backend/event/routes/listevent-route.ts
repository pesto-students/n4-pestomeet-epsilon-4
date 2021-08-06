import express from "express";
import listeventController from "../controller/listevent-controller";

/* This module is a route handler for API /api/pesto/list/event */

const listeventRouter = express.Router();
listeventRouter.get("/:type", listeventController);
export default listeventRouter;
