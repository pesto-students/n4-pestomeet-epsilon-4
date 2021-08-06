import resourceDB from "../schema/resource-schema";
import eventDB from "../../event/schema/event-schema";
import { message } from "../../utils/response-format";
import masterClassUpload from "../../utils/s3-masterclass";
const ResourceController = (request, response) => {
    masterClassUpload(request, response, (error) => {
        if (error) {
            response.json({ error: error });
        }
        else {
            // If File not found
            if (request.file === undefined) {
                response.json("Error: No File Selected");
            }
            else {
                const resource = request.file.location;
                const resourceKey = request.file.key;
                const { resourceName, uploaderId, eventId, resourceLinks, eventType, } = request.body;
                const newBatch = new resourceDB({
                    resourceName: resourceName.toLowerCase(),
                    uploaderId: uploaderId,
                    eventId: eventId,
                    resourceLinks: resourceLinks,
                    eventType: eventType.toLowerCase(),
                    resourceKey: resourceKey,
                    resource: resource,
                    createTime: Date.now()
                });
                resourceDB.findOne({ resourceKey: resourceKey }, (error, result) => {
                    if (error) {
                        response.json(message("Error Happened while uploading resources, Try Again !", null, false));
                    }
                    else if (!result) {
                        newBatch.save((error, result) => {
                            if (error) {
                                response.json({ message: error });
                            }
                            else {
                                Promise.all([
                                    resourceDB.countDocuments({ eventId: eventId }),
                                ]).then(([resourceCount]) => {
                                    eventDB.findOneAndUpdate({ eventId: eventId }, { $set: { resourceCount: resourceCount } }, { useFindAndModify: false, new: true }, (errors, doc) => {
                                        if (errors) {
                                            response.json(message("Update Failed ! Please Try Again", null, false));
                                        }
                                        else if (!doc) {
                                            response.json(message("Couldn't Find the Event", null, false));
                                        }
                                        else {
                                            response.json(message("Resource Uploaded Successfully", result, true));
                                        }
                                    });
                                });
                            }
                        });
                    }
                    else {
                        response.json(message("Resource already found", null, false));
                    }
                });
            }
        }
    });
};
export default ResourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlL2NvbnRyb2xsZXIvY3JlYXRlcmVzb3VyY2UtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ3pELGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUM3QyxJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsb0JBQW9CO1lBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3JDLE1BQU0sRUFDSixZQUFZLEVBQ1osVUFBVSxFQUNWLE9BQU8sRUFDUCxhQUFhLEVBQ2IsU0FBUyxHQUNWLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUM7b0JBQzlCLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUN4QyxVQUFVLEVBQUUsVUFBVTtvQkFDdEIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLGFBQWEsRUFBQyxhQUFhO29CQUMzQixTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsV0FBVyxFQUFFLFdBQVc7b0JBQ3hCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxPQUFPLENBQ2hCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUM1QixDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsdURBQXVELEVBQ3ZELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO3FCQUNIO3lCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7NEJBQ3hDLElBQUksS0FBSyxFQUFFO2dDQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs2QkFDbkM7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQ0FDVixVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO2lDQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFO29DQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUUsRUFBRSxPQUFPLEVBQUMsT0FBTyxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxFQUFFLEVBQ3ZDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDdEMsQ0FBQyxNQUFXLEVBQUUsR0FBUSxFQUFFLEVBQUU7d0NBQ3hCLElBQUksTUFBTSxFQUFFOzRDQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3lDQUN6RTs2Q0FBTSxJQUFJLENBQUMsR0FBRyxFQUFFOzRDQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3lDQUNoRTs2Q0FBTTs0Q0FDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzt5Q0FDeEU7b0NBQ0gsQ0FBQyxDQUNBLENBQUE7Z0NBQ0gsQ0FBQyxDQUNGLENBQUM7NkJBQ0g7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQy9EO2dCQUNILENBQUMsQ0FDRixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0YsZUFBZSxrQkFBa0IsQ0FBQyJ9