import express from "express";
import bodyParser from "body-parser";
import path from "path";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import avatarController from "../controller/avatar-controller";

/* This module is a route handler for API /api/pesto/avatar/upload */

const avatarRouter = express.Router();

avatarRouter.post("/:id", avatarController);

export default avatarRouter;
