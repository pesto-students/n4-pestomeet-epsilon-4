import express from "express";
import { body, check } from "express-validator";
import registerController from "../controller/register-controller";

/* This module is a route handler for API /api/pesto/register */

const registerRouter = express.Router();

registerRouter.post(
  "/",
  body("email").isEmail(),
  body("phone").isNumeric(),
  check("password").not().isEmpty(),
  check("role").not().isEmpty(),
  check("experience").not().isEmpty(),
  check("approval").not().isEmpty(),
  check("name").not().isEmpty(),
  registerController
);

export default registerRouter;
