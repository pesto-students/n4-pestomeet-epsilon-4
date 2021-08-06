import announcementDB from "../schema/announcement-schema";
import { message } from "../../utils/response-format";

const CreateAnnouncementController = (request: any, response: any) => {
  const { announcementName, announcementDescription } = request.body;
  let newAnnouncement = new announcementDB({
    announcementName: announcementName.toLowerCase(),
    announcementDescription: announcementDescription,
    createTime: Date.now(),
  });

  announcementDB.findOne(
    { announcementName: announcementName.toLowerCase() },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while submitting announcement, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newAnnouncement.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(
              message("Announcement Submitted Successfully", null, true)
            );
          }
        });
      } else {
        response.json(
          message("Announcement is already submitted", null, false)
        );
      }
    }
  );
};

export default CreateAnnouncementController;
