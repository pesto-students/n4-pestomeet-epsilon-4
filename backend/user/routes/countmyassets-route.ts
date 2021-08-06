import express from "express";
import countMyAssetsController from "../controller/countmyassets-controller";

/* This module is a route handler for API /api/pesto/count/myassets/userID */

const countMyAssetsRouter = express.Router();
countMyAssetsRouter.get("/:userID", countMyAssetsController);

export default countMyAssetsRouter;
