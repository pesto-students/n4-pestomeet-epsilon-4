import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const DeleteassignmentController = (request, response) => {
    const assignmentId = request.params.id;
    assignmentDB.findOneAndDelete({ assignmentId: assignmentId }, {}, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting Assignment", null, false));
        }
        else if (!docs) {
            response.json(message("Assignment Not Found", docs, false));
        }
        else {
            response.json(message("Assignment deleted successfully", docs, true));
        }
    });
};
export default DeleteassignmentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlYXNzaWdubWVudC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXNzaWdubWVudC9jb250cm9sbGVyL2RlbGV0ZWFzc2lnbm1lbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUNqRSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxFQUFFO1FBQzNGLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSwwQkFBMEIsQ0FBQyJ9