import resourceDB from "../schema/resource-schema";
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
                const { resourceName, uploaderId, uploaderName, eventID, eventName, eventType, } = request.body;
                const newBatch = new resourceDB({
                    resourceName: resourceName.toLowerCase(),
                    uploaderId: uploaderId,
                    uploaderName: uploaderName.toLowerCase(),
                    eventID: eventID,
                    eventName: eventName.toLowerCase(),
                    eventType: eventType.toLowerCase(),
                    resourceKey: resourceKey,
                    resource: resource,
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
                                response.json(message("Resource Uploaded Successfully", result, true));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9jb250cm9sbGVyL2NyZWF0ZXJlc291cmNlLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8saUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFFM0QsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUN6RCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLG9CQUFvQjtZQUNwQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNyQyxNQUFNLEVBQ0osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osT0FBTyxFQUNQLFNBQVMsRUFDVCxTQUFTLEdBQ1YsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQztvQkFDOUIsWUFBWSxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUU7b0JBQ3hDLFVBQVUsRUFBRSxVQUFVO29CQUN0QixZQUFZLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRTtvQkFDeEMsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFO29CQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsV0FBVyxFQUFFLFdBQVc7b0JBQ3hCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FDaEIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQzVCLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO29CQUMxQixJQUFJLEtBQUssRUFBRTt3QkFDVCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCx1REFBdUQsRUFDdkQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTs0QkFDeEMsSUFBSSxLQUFLLEVBQUU7Z0NBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOzZCQUNuQztpQ0FBTTtnQ0FDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQ3hELENBQUM7NkJBQ0g7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQy9EO2dCQUNILENBQUMsQ0FDRixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0YsZUFBZSxrQkFBa0IsQ0FBQyJ9