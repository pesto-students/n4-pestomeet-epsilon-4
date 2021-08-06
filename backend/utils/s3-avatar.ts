import path from "path";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3, PROFILE_FOLDER } from "./app-constants";

/* This module is responsible for uploading users profile pictures to AWS S3 */


interface Callback<T> {
  (error: Error): void;
  (error: null, value: T): void;
}
const profileImgUpload = multer({
  storage: multerS3({
    s3: S3,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: "inline",
    bucket: "pestomeet-recordings",
    key: function (req: any, file, cb: Callback<string>) {
      cb(
        null,
        PROFILE_FOLDER + "/" + req.params.id + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function (req, file, cb: multer.FileFilterCallback) {
    checkFileType(file, cb);
  },
}).single("profileImage");

function checkFileType(file: any, cb: multer.FileFilterCallback) {
  // Allowed extension
  const filetypes = /jpeg|jpg|png|gif/;
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

export default profileImgUpload;
