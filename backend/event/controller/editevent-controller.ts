import eventDB from "../schema/event-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";

/* This module is responsible for editing events from the system based on the
changed values submitted through front-end*/

const EditEventController = (request: any, response: any) => {
  let {
    eventName,
    eventDescription,
    eventType,
    eventStart,
    eventEnd,
    eventColor,
    organiserId,
    attendees,
    hasAssignment,
  } = request.body;
  let eventId = request.params.id;
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.json(message("Validation Error", errors.array(), false));
  }

  let editEvent = {
    eventName: eventName.toLowerCase(),
    eventDescription: eventDescription,
    eventType: eventType,
    eventStart: eventStart,
    eventEnd: eventEnd,
    eventColor: eventColor,
    organiserId: organiserId,
    attendees: attendees,
    hasAssignment: hasAssignment,
  };
  const doc = eventDB.findOneAndUpdate(
    { eventId: eventId },
    { $set: editEvent },
    { useFindAndModify: false, new: true },
    (errors: any, doc: any) => {
      if (errors) {
        response.json(message("Update Failed ! Please Try Again", null, false));
      } else if (!doc) {
        response.json(message("Couldn't Find the Event", null, true));
      } else {
        response.json(message("Event Updated Successfully", null, true));
      }
    }
  );
};

export default EditEventController;
