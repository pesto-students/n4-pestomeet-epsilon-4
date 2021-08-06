import resourceDB from "../schema/resource-schema";
import eventDB from "../../event/schema/event-schema";
import { message } from "../../utils/response-format";
import { S3, BUCKET } from "../../utils/app-constants";

/* This module is responsible for deleting the uploaded resource in AWS S3 and its 
asscoiated entry in mongoDB */

const DeleteresourceController = (request: any, response: any) => {
  const resourceId = request.params.resourceId;
  resourceDB.findOne({ resourceId: resourceId }, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting Resource", errors, false));
    } else if (!docs) {
      response.json(message("Resource Not Found", docs, false));
    } else {
      S3.deleteObject(
        {
          Bucket: BUCKET,
          Key: docs.resourceKey,
        },
        function (errors: any, data: any) {
          if (errors) {
            response.json(
              message("Error while deleting Resource ", errors, false)
            );
          } else {
            Promise.all([resourceDB.findOne({ resourceId: resourceId })]).then(
              ([resourceDetail]) => {
                console.log(resourceDetail);
                Promise.all([
                  resourceDB.countDocuments({
                    eventId: resourceDetail.eventId,
                  }),
                  resourceDB.deleteOne({ resourceId: resourceId }),
                ]).then(([resourceCount]) => {
                  eventDB.findOneAndUpdate(
                    { eventId: resourceDetail.eventId },
                    { $set: { resourceCount: resourceCount - 1 } },
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
                          message("Resource Deleted Successfully", doc, true)
                        );
                      }
                    }
                  );
                });
              }
            );
          }
        }
      );
    }
  });
};

export default DeleteresourceController;
