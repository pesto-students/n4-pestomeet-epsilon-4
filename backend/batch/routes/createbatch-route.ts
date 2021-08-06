import express, { Router } from "express";
import createbatchController from "../controller/createbatch-controller";

/* This module is a route handler for API /api/pesto/create/batch */

const createbatchRouter: Router = express.Router();
createbatchRouter.post("/", createbatchController);

export default createbatchRouter;
