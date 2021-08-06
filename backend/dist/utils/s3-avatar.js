import path from "path";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3, PROFILE_FOLDER } from "./app-constants";
const profileImgUpload = multer({
    storage: multerS3({
        s3: S3,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        contentDisposition: 'inline',
        bucket: "pestomeet-recordings",
        key: function (req, file, cb) {
            cb(null, PROFILE_FOLDER +
                "/" +
                req.params.id +
                path.extname(file.originalname));
        },
    }),
    limits: { fileSize: 2000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("profileImage");
function checkFileType(file, cb) {
    // Allowed extension
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb(null, false);
    }
}
export default profileImgUpload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvczMtYXZhdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUV4QixPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPckQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7SUFDOUIsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNoQixFQUFFLEVBQUUsRUFBRTtRQUNOLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLFdBQVcsRUFBQyxRQUFRLENBQUMsaUJBQWlCO1FBQ3RDLGtCQUFrQixFQUFDLFFBQVE7UUFDM0IsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QixHQUFHLEVBQUUsVUFBVSxHQUFPLEVBQUUsSUFBSSxFQUFFLEVBQW9CO1lBQ2hELEVBQUUsQ0FDQSxJQUFJLEVBQ0osY0FBYztnQkFDWixHQUFHO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUIsQ0FBQztRQUNWLENBQUM7S0FDRixDQUFDO0lBQ0YsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtJQUM3QixVQUFVLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQTZCO1FBQzVELGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFMUIsU0FBUyxhQUFhLENBQUMsSUFBUyxFQUFFLEVBQTZCO0lBQzdELG9CQUFvQjtJQUNwQixNQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztJQUNyQyxZQUFZO0lBQ1osTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLGFBQWE7SUFDYixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7UUFDdkIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO1NBQU07UUFDTCxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELGVBQWUsZ0JBQWdCLENBQUMifQ==