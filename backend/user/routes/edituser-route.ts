import express from "express";
import { body, check } from "express-validator";
import editController from "../controller/edituser-controller";

/* This module is a route handler for API /api/pesto/edit/user/:id */

const edituserRouter = express.Router();

console.log("in router");

edituserRouter.patch(
  "/:id",
  check("name", "Name is required").not().isEmpty(),
  check("email").not().isEmpty(),
  check("phone").not().isEmpty(),
  check("role").not().isEmpty(),
  check("approval").not().isEmpty(),
  editController
);

export default edituserRouter;
