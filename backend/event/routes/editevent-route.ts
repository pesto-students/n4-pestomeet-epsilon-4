import express from "express";
import { body, check } from "express-validator";
import editeventController from "../controller/editevent-controller";

/* This module is a route handler for API /api/pesto/delete/event */

const editteamRouter = express.Router();

console.log("in router");

editteamRouter.patch(
  "/:id",
  check("eventName", "eventName is required").not().isEmpty(),
  check("eventDescription").not().isEmpty(),
  check("eventType").not().isEmpty(),
  check("eventStart").not().isEmpty(),
  check("eventEnd").not().isEmpty(),
  check("eventColor").not().isEmpty(),
  check("organiserId").not().isEmpty(),
  check("attendees").not().isEmpty(),
  check("hasAssignment").not().isEmpty(),
  editeventController
);

export default editteamRouter;
