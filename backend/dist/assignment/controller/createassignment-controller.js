import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const RegisterteamController = (request, response) => {
    const { assignmentName, uploaderId, eventID, eventType, assignmentLinks } = request.body;
    let newAssignment = new assignmentDB({
        assignmentName: assignmentName.toLowerCase(),
        uploaderId: uploaderId,
        eventID: eventID,
        eventType: eventType,
        assignmentLinks: assignmentLinks,
        createTime: Date.now()
    });
    assignmentDB.findOne({ assignmentName: assignmentName.toLowerCase(), uploaderId: uploaderId, eventID: eventID }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while submitting assignment, Try Again !", null, false));
        }
        else if (!result) {
            newAssignment.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Assignment Submitted Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Assignment is already submitted", null, false));
        }
    });
};
export default RegisterteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYXNzaWdubWVudC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXNzaWdubWVudC9jb250cm9sbGVyL2NyZWF0ZWFzc2lnbm1lbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM3RCxNQUFNLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDckYsSUFBSSxhQUFhLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDbkMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUU7UUFDNUMsVUFBVSxFQUFFLFVBQVU7UUFDdEIsT0FBTyxFQUFFLE9BQU87UUFDaEIsU0FBUyxFQUFDLFNBQVM7UUFDbkIsZUFBZSxFQUFDLGVBQWU7UUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDdkIsQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLE9BQU8sQ0FDbEIsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLE9BQU8sRUFBRSxFQUN2RixDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLHlEQUF5RCxFQUN6RCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztTQUNIO2FBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLEtBQUssRUFBRTtvQkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6RTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLHNCQUFzQixDQUFDIn0=