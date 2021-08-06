import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing resources based on eventID*/

const ListresourceController = (request: any, response: any) => {
  const eventId = request.params.eventId;
  resourceDB
    .find({ eventId: eventId })
    .populate("eventDetail")
    .populate("uploaderDetail")
    .exec((errors: any, result: any) => {
      if (errors) {
        response.json(
          message("Error while reteriving resource", errors, false)
        );
      } else if (result.length == 0) {
        console.log(result);
        response.json(
          message("No resource available for the event", null, false)
        );
      } else {
        let resources = result.map((items) => {
          let eventName, uploaderName;
          if (items.uploaderDetail !== null) {
            uploaderName = items.uploaderDetail.name;
          } else {
            uploaderName = "User Deleted";
          }
          if (items.eventDetail !== null) {
            eventName = items.eventDetail.eventName;
          } else {
            eventName = "User Deleted";
          }
          return {
            resourceLinks: items.resourceLinks,
            resourceName: items.resourceName,
            uploaderId: items.uploaderId,
            uploaderName: uploaderName,
            eventId: items.eventId,
            eventName: eventName,
            resourceKey: items.resourceKey,
            resource: items.resource,
            resourceId: items.resourceId,
          };
        });

        response.json(
          message(
            String(result.length) + " Resources available for the event ",
            resources,
            true
          )
        );
      }
    });
};

export default ListresourceController;
