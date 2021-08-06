import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const RegisterteamController = (request, response) => {
    const { assignmentName, uploaderId, uploaderName, eventID, eventName, eventType, assignmentLinks } = request.body;
    let newAssignment = new assignmentDB({
        assignmentName: assignmentName.toLowerCase(),
        uploaderId: uploaderId,
        uploaderName: uploaderName,
        eventID: eventID,
        eventName: eventName,
        eventType: eventType,
        assignmentLinks: assignmentLinks,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYXNzaWdubWVudC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXNzaWdubWVudHMvY29udHJvbGxlci9jcmVhdGVhc3NpZ25tZW50LWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0csSUFBSSxhQUFhLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDbkMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUU7UUFDNUMsVUFBVSxFQUFFLFVBQVU7UUFDdEIsWUFBWSxFQUFFLFlBQVk7UUFDMUIsT0FBTyxFQUFFLE9BQU87UUFDaEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFDLFNBQVM7UUFDbkIsZUFBZSxFQUFDLGVBQWU7S0FDaEMsQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLE9BQU8sQ0FDbEIsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLE9BQU8sRUFBRSxFQUN2RixDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLHlEQUF5RCxFQUN6RCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztTQUNIO2FBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLEtBQUssRUFBRTtvQkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6RTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLHNCQUFzQixDQUFDIn0=