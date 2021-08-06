import aws from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

/* This module contain constant declaration which is used througout the application */


export const DB_USER_MODEL = "userModel";
export const DB_BATCH_MODEL = "batchModel";
export const DB_TEAM_MODEL = "teamModel";
export const DB_RESOURCE_MODEL = "resourceModel";
export const DB_EVENT_MODEL = "eventModel";
export const DB_ASSIGNMENT_MODEL = "assignmentModel";
export const DB_ANNOUNCEMENT_MODEL = "announcementModel";

export const S3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

export const BUCKET = "pestomeet-recordings";
export const PROFILE_FOLDER = "profile-pics";
export const MASTERCLASS_FOLDER = "masterclass-videos";

export const ACCOUNT_ID = process.env.ACCOUNT_ID;
export const AUTH_TOKEN = process.env.AUTH_TOKEN;
export const MSG_ID = process.env.MSG_ID;
export const COUNTRY_CODE = "91";
