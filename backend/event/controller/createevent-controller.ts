import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";
import { truncate } from "node:fs/promises";

/* This module is responsible for creating events for the particular date time and invite users for that
particular event*/

const EventController = (request: any, response: any) => {
  const {
    eventName,
    eventType,
    eventColor,
    eventDescription,
    eventStart,
    eventEnd,
    hasAssignment,
    organiserId,
    organiserName,
    attendees,
  } = request.body;
  let newEvent = new eventDB({
    eventName: eventName.toLowerCase(),
    eventType: eventType.toLowerCase(),
    eventStart: eventStart,
    eventEnd: eventEnd,
    eventColor: eventColor,
    eventDescription: eventDescription,
    hasAssignment: hasAssignment,
    organiserId: organiserId,
    attendees: attendees,
    createTime: Date.now(),
  });

  eventDB.findOne(
    {
      eventName: eventName.toLowerCase(),
      eventType: eventType,
      eventStart: eventStart,
    },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while creating Event, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newEvent.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Event created Successfully", null, true));
          }
        });
      } else {
        response.json(message("Event is already Scheduled", null, false));
      }
    }
  );
};
export default EventController;
