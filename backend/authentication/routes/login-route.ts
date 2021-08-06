import express, { Router } from "express";
import loginController from "../controller/login-controller";

/* This module is a route handler for API /api/pesto/login */

const loginRouter: Router = express.Router();
loginRouter.post("/", loginController);

export default loginRouter;
