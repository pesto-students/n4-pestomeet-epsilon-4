import express from "express";
import deleteteamController from "../controller/deleteteam-controller";

/* This module is a route handler for API /api/pesto/delete/team/:id */

const deleteteamRouter = express.Router();
deleteteamRouter.delete("/:id", deleteteamController);

export default deleteteamRouter;
