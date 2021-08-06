import express from "express";
import listmyteamController from "../controller/listmyteam-controller";

/* This module is a route handler for API /api/pesto/list/myteam */

const listmyteamRouter = express.Router();
listmyteamRouter.get("/:userID", listmyteamController);
export default listmyteamRouter;
