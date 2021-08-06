import express from "express";
import bookeventController from "../controller/bookevent-controller";

/* This module is a route handler for API /api/pesto/book/event/:eventID */

const bookeventRouter = express.Router();

bookeventRouter.post("/:eventId", bookeventController);

export default bookeventRouter;
