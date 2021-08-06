import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const ListassignmentController = (request, response) => {
    const eventID = request.params.eventID;
    assignmentDB
        .find({ eventID: eventID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving assignment", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No assignment available for the event", null, false));
        }
        else {
            response.json(message(String(result.length) + " Assignment available for the event ", result, true));
        }
    });
};
export default ListassignmentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFzc2lnbm1lbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2lnbm1lbnRzL2NvbnRyb2xsZXIvbGlzdGFzc2lnbm1lbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUMvRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxZQUFZO1NBQ1QsSUFBSSxDQUNILEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUNsQixDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVFO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQzlELENBQUM7U0FDSDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxzQ0FBc0MsRUFDOUQsTUFBTSxFQUNOLElBQUksQ0FDTCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSx3QkFBd0IsQ0FBQyJ9