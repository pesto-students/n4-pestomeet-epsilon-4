import express from "express";
import { body, check } from "express-validator";
import editteamController from "../controller/editteam-controller";

/* This module is a route handler for API /api/pesto/edit/ateam/:id */

const editteamRouter = express.Router();

console.log("in router");

editteamRouter.patch(
  "/:id",
  check("teamName", "teamName is required").not().isEmpty(),
  check("teamType").not().isEmpty(),
  check("mentorName").not().isEmpty(),
  check("teamMembers").not().isEmpty(),
  editteamController
);

export default editteamRouter;
