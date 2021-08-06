import resourceDB from "../schema/resource-schema";
import eventDB from "../../event/schema/event-schema";
import { message } from "../../utils/response-format";
import { S3, BUCKET } from "../../utils/app-constants";
const DeleteresourceController = (request, response) => {
    const resourceId = request.params.resourceId;
    resourceDB.findOne({ resourceId: resourceId }, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting Resource", errors, false));
        }
        else if (!docs) {
            response.json(message("Resource Not Found", docs, false));
        }
        else {
            S3.deleteObject({
                Bucket: BUCKET,
                Key: docs.resourceKey,
            }, function (errors, data) {
                if (errors) {
                    response.json(message("Error while deleting Resource ", errors, false));
                }
                else {
                    Promise.all([
                        resourceDB.findOne({ resourceId: resourceId }),
                    ]).then(([resourceDetail]) => {
                        console.log(resourceDetail);
                        Promise.all([
                            resourceDB.countDocuments({ eventId: resourceDetail.eventId }),
                            resourceDB.deleteOne({ resourceId: resourceId })
                        ]).then(([resourceCount]) => {
                            eventDB.findOneAndUpdate({ eventId: resourceDetail.eventId }, { $set: { resourceCount: resourceCount - 1 } }, { useFindAndModify: false, new: true }, (errors, doc) => {
                                if (errors) {
                                    response.json(message("Update Failed ! Please Try Again", null, false));
                                }
                                else if (!doc) {
                                    response.json(message("Couldn't Find the Event", null, false));
                                }
                                else {
                                    response.json(message("Resource Deleted Successfully", doc, true));
                                }
                            });
                        });
                    });
                }
            });
        }
    });
};
export default DeleteresourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlL2NvbnRyb2xsZXIvZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RCxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzdDLFVBQVUsQ0FBQyxPQUFPLENBQ2hCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUMxQixDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUN6QixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0wsRUFBRSxDQUFDLFlBQVksQ0FDYjtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDdEIsRUFDRCxVQUFVLE1BQVcsRUFBRSxJQUFTO2dCQUM5QixJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3pELENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQzt3QkFDVixVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxDQUFDO3FCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFO3dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO3dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDOzRCQUNWLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFBQyxPQUFPLEVBQUMsY0FBYyxDQUFDLE9BQU8sRUFBQyxDQUFDOzRCQUMzRCxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO3lCQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFOzRCQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUUsRUFBRSxPQUFPLEVBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUMzRCxFQUFFLElBQUksRUFBRSxFQUFDLGFBQWEsRUFBQyxhQUFhLEdBQUMsQ0FBQyxFQUFDLEVBQUUsRUFDekMsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUN0QyxDQUFDLE1BQVcsRUFBRSxHQUFRLEVBQUUsRUFBRTtnQ0FDeEIsSUFBSSxNQUFNLEVBQUU7b0NBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUNBQ3pFO3FDQUFNLElBQUksQ0FBQyxHQUFHLEVBQUU7b0NBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUNBQ2hFO3FDQUFNO29DQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lDQUNwRTs0QkFDSCxDQUFDLENBQUMsQ0FBQTt3QkFDUCxDQUFDLENBQUMsQ0FBQTtvQkFDSixDQUFDLENBQUMsQ0FBQTtpQkFDRDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDRSxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQztBQUVGLGVBQWUsd0JBQXdCLENBQUMifQ==