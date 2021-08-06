import express from "express";
import bodyParser from "body-parser";
import path from "path";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3, BUCKET, MASTERCLASS_FOLDER } from "./app-constants";
import { fileURLToPath } from "url";

/* This module is responsible for uploading recorded videos to AWS S3 */

interface Callback<T> {
  (error: Error): void;
  (error: null, value: T): void;
}
const masterClassUpload = multer({
  storage: multerS3({
    s3: S3,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: "inline",
    bucket: BUCKET,
    key: function (req: any, file, cb: Callback<string>) {
      console.log(req.body);
      cb(
        null,
        MASTERCLASS_FOLDER +
          "/" +
          req.body.resourceName +
          "_" +
          req.body.uploaderId +
          "_" +
          req.body.eventId +
          path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000000 }, // In bytes: 2000000000 bytes = 2 GB
  fileFilter: function (req, file, cb: multer.FileFilterCallback) {
    checkFileType(file, cb);
  },
}).single("resource");

function checkFileType(file: any, cb: multer.FileFilterCallback) {
  // Allowed ext
  const filetypes = /mp4|avi/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(null, false);
  }
}

export default masterClassUpload;
