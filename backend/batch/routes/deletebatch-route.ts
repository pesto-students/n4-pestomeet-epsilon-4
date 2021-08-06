import express from "express";
import deletebatchController from "../controller/deletebatch-controller";

/* This module is a route handler for API /api/pesto/delete/batch */

const deletebatchRouter = express.Router();
deletebatchRouter.delete("/:id", deletebatchController);

export default deletebatchRouter;
