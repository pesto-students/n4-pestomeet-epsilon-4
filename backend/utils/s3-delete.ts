import express from "express";
import bodyParser from "body-parser";
import path from "path";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3, BUCKET } from "./app-constants";

/* This module is responsible for deleteing uploaded video from AWS S3 */

interface Callback<T> {
  (error: Error): void;
  (error: null, value: T): void;
}

S3.deleteObject(
  {
    Bucket: BUCKET,
    Key: "some/subfolders/nameofthefile1.extension",
  },
  function (err, data) {}
);
