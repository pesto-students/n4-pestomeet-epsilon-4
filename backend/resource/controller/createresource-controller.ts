import resourceDB from "../schema/resource-schema";
import eventDB from "../../event/schema/event-schema";
import { message } from "../../utils/response-format";
import masterClassUpload from "../../utils/s3-masterclass";

/* This module is responsible for creating entry for the uploaded resources in AWS S3
in fron-end*/

const ResourceController = (request: any, response: any) => {
  masterClassUpload(request, response, (error) => {
    if (error) {
      response.json({ error: error });
    } else {
      // If File not found
      if (request.file === undefined) {
        response.json("Error: No File Selected");
      } else {
        const resource = request.file.location;
        const resourceKey = request.file.key;
        const { resourceName, uploaderId, eventId, resourceLinks, eventType } =
          request.body;
        const newBatch = new resourceDB({
          resourceName: resourceName.toLowerCase(),
          uploaderId: uploaderId,
          eventId: eventId,
          resourceLinks: resourceLinks,
          eventType: eventType.toLowerCase(),
          resourceKey: resourceKey,
          resource: resource,
          createTime: Date.now(),
        });
        resourceDB.findOne(
          { resourceKey: resourceKey },
          (error: any, result: any) => {
            if (error) {
              response.json(
                message(
                  "Error Happened while uploading resources, Try Again !",
                  null,
                  false
                )
              );
            } else if (!result) {
              newBatch.save((error: any, result: any) => {
                if (error) {
                  response.json({ message: error });
                } else {
                  Promise.all([
                    resourceDB.countDocuments({ eventId: eventId }),
                  ]).then(([resourceCount]) => {
                    eventDB.findOneAndUpdate(
                      { eventId: eventId },
                      { $set: { resourceCount: resourceCount } },
                      { useFindAndModify: false, new: true },
                      (errors: any, doc: any) => {
                        if (errors) {
                          response.json(
                            message(
                              "Update Failed ! Please Try Again",
                              null,
                              false
                            )
                          );
                        } else if (!doc) {
                          response.json(
                            message("Couldn't Find the Event", null, false)
                          );
                        } else {
                          response.json(
                            message(
                              "Resource Uploaded Successfully",
                              result,
                              true
                            )
                          );
                        }
                      }
                    );
                  });
                }
              });
            } else {
              response.json(message("Resource already found", null, false));
            }
          }
        );
      }
    }
  });
};
export default ResourceController;
