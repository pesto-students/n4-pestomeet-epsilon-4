import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
const ListresourceController = (request, response) => {
    const eventId = request.params.eventId;
    resourceDB
        .find({ eventId: eventId }).populate("eventDetail").populate("uploaderDetail").exec((errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving resource", errors, false));
        }
        else if (result.length == 0) {
            console.log(result);
            response.json(message("No resource available for the event", null, false));
        }
        else {
            let resources = result.map((items) => {
                let eventName, uploaderName;
                if (items.uploaderDetail !== null) {
                    uploaderName = items.uploaderDetail.name;
                }
                else {
                    uploaderName = "User Deleted";
                }
                if (items.eventDetail !== null) {
                    eventName = items.eventDetail.eventName;
                }
                else {
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
                    resourceId: items.resourceId
                };
            });
            response.json(message(String(result.length) + " Resources available for the event ", resources, true));
        }
    });
};
export default ListresourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHJlc291cmNlLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZS9jb250cm9sbGVyL2xpc3RyZXNvdXJjZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLHNCQUFzQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzdELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLFVBQVU7U0FDUCxJQUFJLENBQ0gsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQ3ZHLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDMUU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMscUNBQXFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUM1RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDbEMsSUFBSSxTQUFTLEVBQUMsWUFBWSxDQUFDO2dCQUMzQixJQUFHLEtBQUssQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFDO29CQUMvQixZQUFZLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUE7aUJBQ3pDO3FCQUFJO29CQUNILFlBQVksR0FBRyxjQUFjLENBQUE7aUJBQzlCO2dCQUNELElBQUcsS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUM7b0JBQzVCLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQTtpQkFDeEM7cUJBQUk7b0JBQ0gsU0FBUyxHQUFHLGNBQWMsQ0FBQTtpQkFDM0I7Z0JBQ0QsT0FBTztvQkFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7b0JBQ2xDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtvQkFDaEMsVUFBVSxFQUFDLEtBQUssQ0FBQyxVQUFVO29CQUMzQixZQUFZLEVBQUMsWUFBWTtvQkFDekIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixTQUFTLEVBQUMsU0FBUztvQkFDbkIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO29CQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7b0JBQ3hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtpQkFDN0IsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFBO1lBRUYsUUFBUSxDQUFDLElBQUksQ0FFWCxPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxxQ0FBcUMsRUFDN0QsU0FBUyxFQUNULElBQUksQ0FDTCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSxzQkFBc0IsQ0FBQyJ9