import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for creating assignments from the system based on the
values submitted through front-end*/

const RegisterteamController = (request: any, response: any) => {
  const { assignmentName, uploaderId, eventID, eventType, assignmentLinks } =
    request.body;
  let newAssignment = new assignmentDB({
    assignmentName: assignmentName.toLowerCase(),
    uploaderId: uploaderId,
    eventID: eventID,
    eventType: eventType,
    assignmentLinks: assignmentLinks,
    createTime: Date.now(),
  });

  assignmentDB.findOne(
    {
      assignmentName: assignmentName.toLowerCase(),
      uploaderId: uploaderId,
      eventID: eventID,
    },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while submitting assignment, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newAssignment.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(
              message("Assignment Submitted Successfully", null, true)
            );
          }
        });
      } else {
        response.json(message("Assignment is already submitted", null, false));
      }
    }
  );
};

export default RegisterteamController;
