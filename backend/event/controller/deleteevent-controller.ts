import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for deleting events from the syatem that are already scheduled */

const DeleteeventController = (request: any, response: any) => {
  const id = request.params.id;
  eventDB.findOneAndDelete({ eventId: id }, {}, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting event", null, false));
    } else if (!docs) {
      response.json(message("Event Not Found", docs, false));
    } else {
      response.json(message("Event deleted successfully", docs, true));
    }
  });
};

export default DeleteeventController;
