import express from "express";
import deleteController from "../controller/deleteuser-controller";

/* This module is a route handler for API /api/pesto/delete/user/:id */

const deleteRouter = express.Router();
deleteRouter.delete("/:id", deleteController);

export default deleteRouter;
