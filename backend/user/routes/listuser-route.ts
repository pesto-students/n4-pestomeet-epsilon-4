import express from "express";
import listController from "../controller/listuser-controller";

/* This module is a route handler for API /api/pesto/list/user */

const listRouter = express.Router();
listRouter.get("/:status/:role", listController);

export default listRouter;
