import eventDB from "../schema/event-schema";
import userDB from "../../user/schema/user-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing associated events the for the given userID, 
 for example: master class events associated scheduled by mentor , daily / weekly meeting
 scheduled by mentor ... etc*/

const ListMyEventController = (request: any, response: any) => {
  const userID = request.params.userID;
  userDB.findOne({ id: userID }, (errors: any, result: any) => {
    if (errors) {
      response.json(message("Error while reteriving user", errors, false));
    } else if (result == null) {
      response.json(message("No User Found", null, false));
    } else if (result.role == "super admin") {
      eventDB
        .find({})
        .populate("organiserDetail")
        .exec(function (errors: any, result: any) {
          if (errors) {
            response.json(
              message("Error while reteriving Events", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Events Found", null, false));
          } else {
            let events = result.map((items) => {
              let organiserName;
              if (items.organiserDetail !== null) {
                organiserName = items.organiserDetail.name;
              } else {
                organiserName = "User Deleted";
              }
              return {
                eventId: items.eventId,
                eventName: items.eventName,
                eventType: items.eventType,
                eventStart: items.eventStart,
                eventEnd: items.eventEnd,
                eventColor: items.eventColor,
                eventDescription: items.eventDescription,
                hasAssignment: items.hasAssignment,
                organiserId: items.organiserId,
                resourceCount: items.resourceCount,
                organiserName: organiserName,
                attendees: items.attendees,
              };
            });
            response.json(message("Events Reterived", events, true));
          }
        });
    } else if (result.role == "admin") {
      eventDB
        .find({ organiserId: userID })
        .populate("organiserDetail")
        .exec((errors: any, result: any) => {
          if (errors) {
            response.json(
              message("Error while reteriving Events", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Events Found", null, false));
          } else {
            let events = result.map((items) => {
              let organiserName;
              if (items.organiserDetail !== null) {
                organiserName = items.organiserDetail.name;
              } else {
                organiserName = "User Deleted";
              }
              return {
                eventId: items.eventId,
                eventName: items.eventName,
                eventType: items.eventType,
                eventStart: items.eventStart,
                eventEnd: items.eventEnd,
                eventColor: items.eventColor,
                eventDescription: items.eventDescription,
                hasAssignment: items.hasAssignment,
                organiserId: items.organiserId,
                resourceCount: items.resourceCount,
                organiserName: organiserName,
                attendees: items.attendees,
              };
            });
            response.json(message("Events Reterived", events, true));
          }
        });
    } else if (result.role == "mentor") {
      eventDB
        .find({ organiserId: userID })
        .populate("organiserDetail")
        .exec((errors: any, result: any) => {
          if (errors) {
            response.json(
              message("Error while reteriving Events", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Events Found", null, false));
          } else {
            let events = result.map((items) => {
              let organiserName;
              if (items.organiserDetail !== null) {
                organiserName = items.organiserDetail.name;
              } else {
                organiserName = "User Deleted";
              }
              return {
                eventId: items.eventId,
                eventName: items.eventName,
                eventType: items.eventType,
                eventStart: items.eventStart,
                eventEnd: items.eventEnd,
                eventColor: items.eventColor,
                eventDescription: items.eventDescription,
                hasAssignment: items.hasAssignment,
                organiserId: items.organiserId,
                resourceCount: items.resourceCount,
                organiserName: organiserName,
                attendees: items.attendees,
              };
            });
            response.json(message("Events Reterived", events, true));
          }
        });
    } else {
      eventDB
        .find({
          attendees: {
            $elemMatch: { batchMember: { $elemMatch: { id: userID } } },
          },
        })
        .populate("organiserDetail")
        .exec((errors: any, result: any) => {
          if (errors) {
            response.json(
              message("Error while reteriving Events", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Events Found", null, false));
          } else {
            let events = result.map((items) => {
              return {
                eventId: items.eventId,
                eventName: items.eventName,
                eventType: items.eventType,
                eventStart: items.eventStart,
                eventEnd: items.eventEnd,
                eventColor: items.eventColor,
                eventDescription: items.eventDescription,
                hasAssignment: items.hasAssignment,
                organiserId: items.organiserId,
                resourceCount: items.resourceCount,
                organiserName: items.organiserDetail.name,
                attendees: items.attendees,
              };
            });
            response.json(message("Events Reterived", events, true));
          }
        });
    }
  });
};

export default ListMyEventController;
