import express, { Router } from "express";
import createteamController from "../controller/createteam-controller";

/* This module is a route handler for API /api/pesto/create/team */

const createteamRouter: Router = express.Router();
createteamRouter.post("/", createteamController);

export default createteamRouter;
