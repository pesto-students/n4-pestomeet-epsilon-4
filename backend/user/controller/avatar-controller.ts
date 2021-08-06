import userDB from "../schema/user-schema";
import { message } from "../../utils/response-format";
import profileImgUpload from "../../utils/s3-avatar";

/* This module is responsible for uploading users profile pictures details to MongoDB*/

const AvatarController = (request: any, response: any) => {
  const id = request.params.id;

  profileImgUpload(request, response, (error) => {
    if (error) {
      response.json({ error: error });
    } else {
      // If File not found
      if (request.file === undefined) {
        response.json("Error: No File Selected");
      } else {
        const imageName = request.file;
        let editUser = { avatar: imageName.location };
        console.log(id);
        userDB.findOneAndUpdate(
          { id: id },
          { $set: editUser },
          { useFindAndModify: false, new: true },
          (errors: any, doc: any) => {
            if (errors) {
              response.json(
                message("Upload Failed ! Please Try Again", null, false)
              );
            } else if (!doc) {
              response.json(message("Couldn't Find the user", null, false));
            } else {
              response.json(
                message("Profile Picture Successfully", null, true)
              );
            }
          }
        );
      }
    }
  });
};

export default AvatarController;
