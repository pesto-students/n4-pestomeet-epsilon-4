import express from "express";
import listteamController from "../controller/listteam-controller";

/* This module is a route handler for API /api/pesto/list/team */


const listteamRouter = express.Router();
listteamRouter.get("/:type", listteamController);
export default listteamRouter;
