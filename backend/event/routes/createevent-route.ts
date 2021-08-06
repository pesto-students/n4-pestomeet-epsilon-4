import express, { Router } from "express";
import createeventController from "../controller/createevent-controller";

/* This module is a route handler for API /api/pesto/create/event */

const createeventRouter: Router = express.Router();
createeventRouter.post("/", createeventController);

export default createeventRouter;
