import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
const ListresourceController = (request, response) => {
    const eventID = request.params.eventID;
    resourceDB
        .find({ eventID: eventID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving resource", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No resource available for the event", null, false));
        }
        else {
            response.json(message(String(result.length) + " Resources available for the event ", result, true));
        }
    });
};
export default ListresourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHJlc291cmNlLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvY29udHJvbGxlci9saXN0cmVzb3VyY2UtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM3RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxVQUFVO1NBQ1AsSUFBSSxDQUNILEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUNsQixDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzFFO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQzVELENBQUM7U0FDSDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxxQ0FBcUMsRUFDN0QsTUFBTSxFQUNOLElBQUksQ0FDTCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSxzQkFBc0IsQ0FBQyJ9