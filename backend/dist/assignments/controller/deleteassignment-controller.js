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
            response.json(message("Assignmet deleted successfully", docs, true));
        }
    });
};
export default DeleteassignmentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlYXNzaWdubWVudC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXNzaWdubWVudHMvY29udHJvbGxlci9kZWxldGVhc3NpZ25tZW50LWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxZQUFZLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRELE1BQU0sMEJBQTBCLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDakUsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdkMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUMzRixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGVBQWUsMEJBQTBCLENBQUMifQ==