import express, { Router } from "express";
import deleteresourceController from "../controller/deleteresource-controller";

/* This module is a route handler for API /api/pesto/resource/delete/:resourceId */

const deleteresourceRouter: Router = express.Router();
deleteresourceRouter.delete("/:resourceId", deleteresourceController);

export default deleteresourceRouter;
