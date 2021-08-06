import eventDB from "../schema/event-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";

/* This module is responsible for booking slots opened by the mentor*/

const BookEventController = (request: any, response: any) => {
  let { hasBooked, attendees } = request.body;
  let eventId = String(request.params.eventId);
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.json(message("Validation Error", errors.array(), false));
  }

  let editEvent = {
    hasBooked: hasBooked,
    attendees: attendees,
  };
  const doc = eventDB.findOneAndUpdate(
    { eventId: eventId, eventType: "slot" },
    { $set: editEvent },
    { useFindAndModify: false, new: true },
    (errors: any, doc: any) => {
      if (errors) {
        response.json(message("Update Failed ! Please Try Again", null, false));
      } else if (!doc) {
        response.json(message("Couldn't Find the Event", null, false));
      } else {
        response.json(message("Event Booked Successfully", null, true));
      }
    }
  );
};

export default BookEventController;
