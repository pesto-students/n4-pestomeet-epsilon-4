import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import { message } from "../../utils/response-format";
/* This module serves as the controller for the API "api/pesto/list/mybatch/" which get userID
as a params and list batches based on userrole */
const ListMyBatchController = (request, response) => {
    const userID = request.params.userID;
    userDB
        .findOne({ id: userID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result == null) {
            response.json(message("No User Found", null, false));
        }
        else if (result.role == "super admin") {
            batchDB.find({}, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Batch Found", null, false));
                }
                else {
                    response.json(message("Batch Reterived", result, true));
                }
            });
        }
        else if (result.role == "admin") {
            batchDB.find({ batchOwnerID: userID }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Batch Found", null, false));
                }
                else {
                    response.json(message("Batches Reterived", result, true));
                }
            });
        }
        else if (result.role == "mentor") {
            response.json(message("Not Applicable for Mentors", null, false));
        }
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default ListMyBatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15YmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvbGlzdG15YmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQ7aURBQ2lEO0FBRWpELE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDNUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsTUFBTTtTQUNILE9BQU8sQ0FDTixFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFDWCxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3RDLENBQUM7U0FDSDthQUFNLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksTUFBTSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUN2RTtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtpQkFDdEQ7cUJBQUk7b0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBQzFEO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUFLLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUM7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsRUFBQyxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFO3FCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO2lCQUN0RDtxQkFBSTtvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtpQkFDNUQ7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBQztZQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUNwRTthQUFJO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDckU7SUFDSCxDQUFDLENBQ0YsQ0FBQTtBQUVMLENBQUMsQ0FBQztBQUVGLGVBQWUscUJBQXFCLENBQUMifQ==