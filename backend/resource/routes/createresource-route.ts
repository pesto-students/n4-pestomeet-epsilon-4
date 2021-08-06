import express, { Router } from "express";
import createresourceController from "../controller/createresource-controller";

/* This module is a route handler for API /api/pesto/resource/upload */

const createresourceRouter: Router = express.Router();
createresourceRouter.post("/", createresourceController);

export default createresourceRouter;
