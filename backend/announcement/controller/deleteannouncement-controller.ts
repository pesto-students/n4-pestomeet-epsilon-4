import announcementDB from "../schema/announcement-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for deleting team from the system */

const DeleteannouncementController = (request: any, response: any) => {
  const announcementId = request.params.id;
  announcementDB.findOneAndDelete(
    { announcementId: announcementId },
    {},
    (errors: any, docs: any) => {
      if (errors) {
        response.json(
          message("Error while deleting Announcenment", null, false)
        );
      } else if (!docs) {
        response.json(message("Announcement Not Found", docs, false));
      } else {
        response.json(message("Announcement deleted successfully", docs, true));
      }
    }
  );
};

export default DeleteannouncementController;
