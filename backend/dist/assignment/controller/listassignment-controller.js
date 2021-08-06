import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const ListassignmentController = (request, response) => {
    const eventID = request.params.eventID;
    assignmentDB
        .find({ eventID: eventID }).populate("uploaderDetail").exec((errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving assignment", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No assignment available for the event", null, false));
        }
        else {
            let resources = result.map((items) => {
                console.log(items.uploaderDetail);
                let uploaderName;
                if (items.uploaderDetail !== null) {
                    uploaderName = items.uploaderDetail.name;
                }
                else {
                    uploaderName = "User Deleted";
                }
                return {
                    assignmentId: items.assignmentId,
                    assignmentName: items.assignmentName,
                    uploaderId: items.uploaderId,
                    uploaderName: uploaderName,
                    eventID: items.eventID,
                    assignmentLinks: items.assignmentLinks,
                };
            });
            response.json(message(String(result.length) + " Assignment available for the event ", resources, true));
        }
    });
};
export default ListassignmentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFzc2lnbm1lbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2lnbm1lbnQvY29udHJvbGxlci9saXN0YXNzaWdubWVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLFlBQVk7U0FDVCxJQUFJLENBQ0gsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDL0UsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM1RTthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUM5RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQ2pDLElBQUksWUFBWSxDQUFDO2dCQUNuQixJQUFHLEtBQUssQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFDO29CQUMvQixZQUFZLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUE7aUJBQ3pDO3FCQUFJO29CQUNILFlBQVksR0FBRyxjQUFjLENBQUE7aUJBQzlCO2dCQUNDLE9BQU87b0JBQ0wsWUFBWSxFQUFDLEtBQUssQ0FBQyxZQUFZO29CQUMvQixjQUFjLEVBQUMsS0FBSyxDQUFDLGNBQWM7b0JBQ25DLFVBQVUsRUFBQyxLQUFLLENBQUMsVUFBVTtvQkFDM0IsWUFBWSxFQUFDLFlBQVk7b0JBQ3pCLE9BQU8sRUFBQyxLQUFLLENBQUMsT0FBTztvQkFDckIsZUFBZSxFQUFDLEtBQUssQ0FBQyxlQUFlO2lCQUN0QyxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLHNDQUFzQyxFQUM5RCxTQUFTLEVBQ1QsSUFBSSxDQUNMLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixlQUFlLHdCQUF3QixDQUFDIn0=