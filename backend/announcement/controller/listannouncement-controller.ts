import announcementDB from "../schema/announcement-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing announcements */

const ListannouncementController = (request: any, response: any) => {
  announcementDB.find({}, (errors: any, result: any) => {
    if (errors) {
      response.json(
        message("Error while reteriving announcement", errors, false)
      );
    } else if (result.length == 0) {
      response.json(
        message("No announcement available for the event", null, false)
      );
    } else {
      response.json(
        message(
          String(result.length) + " Announcement available for the event ",
          result,
          true
        )
      );
    }
  });
};

export default ListannouncementController;
