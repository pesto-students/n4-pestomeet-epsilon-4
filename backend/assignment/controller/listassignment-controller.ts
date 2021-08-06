import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing assignments based on events*/

const ListassignmentController = (request: any, response: any) => {
  const eventID = request.params.eventID;
  assignmentDB
    .find({ eventID: eventID })
    .populate("uploaderDetail")
    .exec((errors: any, result: any) => {
      if (errors) {
        response.json(
          message("Error while reteriving assignment", errors, false)
        );
      } else if (result.length == 0) {
        response.json(
          message("No assignment available for the event", null, false)
        );
      } else {
        let resources = result.map((items) => {
          console.log(items.uploaderDetail);
          let uploaderName;
          if (items.uploaderDetail !== null) {
            uploaderName = items.uploaderDetail.name;
          } else {
            uploaderName = "User Deleted";
          }
          return {
            assignmentId: items.assignmentId,
            assignmentName: items.assignmentName,
            uploaderId: items.uploaderId,
            uploaderName: uploaderName,
            eventID: items.eventID,
            assignmentLinks: items.assignmentLinks,
          };
        });

        response.json(
          message(
            String(result.length) + " Assignment available for the event ",
            resources,
            true
          )
        );
      }
    });
};

export default ListassignmentController;
