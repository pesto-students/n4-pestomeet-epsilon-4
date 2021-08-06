import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for deleting tassignments from the system */

const DeleteassignmentController = (request: any, response: any) => {
  const assignmentId = request.params.id;
  assignmentDB.findOneAndDelete(
    { assignmentId: assignmentId },
    {},
    (errors: any, docs: any) => {
      if (errors) {
        response.json(message("Error while deleting Assignment", null, false));
      } else if (!docs) {
        response.json(message("Assignment Not Found", docs, false));
      } else {
        response.json(message("Assignment deleted successfully", docs, true));
      }
    }
  );
};

export default DeleteassignmentController;
