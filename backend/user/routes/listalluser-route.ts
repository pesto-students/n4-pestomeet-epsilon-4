import express from "express";
import listallController from "../controller/listalluser-controller";

/* This module is a route handler for API /api/pesto/list/user/all */

const listallRouter = express.Router();
listallRouter.get("/", listallController);

export default listallRouter;
