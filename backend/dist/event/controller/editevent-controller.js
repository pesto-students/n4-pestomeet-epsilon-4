import eventDB from "../schema/event-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";
const EditEventController = (request, response) => {
    let { eventName, eventDescription, eventType, eventStart, eventEnd, eventColor, organiserId, attendees, hasAssignment } = request.body;
    let eventId = request.params.id;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    let editEvent = {
        eventName: eventName.toLowerCase(),
        eventDescription: eventDescription,
        eventType: eventType,
        eventStart: eventStart,
        eventEnd: eventEnd,
        eventColor: eventColor,
        organiserId: organiserId,
        attendees: attendees,
        hasAssignment: hasAssignment
    };
    const doc = eventDB.findOneAndUpdate({ eventId: eventId }, { $set: editEvent }, { useFindAndModify: false, new: true }, (errors, doc) => {
        if (errors) {
            response.json(message("Update Failed ! Please Try Again", null, false));
        }
        else if (!doc) {
            response.json(message("Couldn't Find the Event", null, true));
        }
        else {
            response.json(message("Event Updated Successfully", null, true));
        }
    });
};
export default EditEventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGV2ZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ldmVudC9jb250cm9sbGVyL2VkaXRldmVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELElBQUksRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUM5SCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3JCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDMUU7SUFFRCxJQUFJLFNBQVMsR0FBRztRQUNkLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFO1FBQ2xDLGdCQUFnQixFQUFFLGdCQUFnQjtRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsVUFBVTtRQUN0QixRQUFRLEVBQUMsUUFBUTtRQUNqQixVQUFVLEVBQUMsVUFBVTtRQUNyQixXQUFXLEVBQUMsV0FBVztRQUN2QixTQUFTLEVBQUMsU0FBUztRQUNuQixhQUFhLEVBQUMsYUFBYTtLQUM1QixDQUFDO0lBQ0YsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUNsQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFDcEIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQ25CLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDdEMsQ0FBQyxNQUFXLEVBQUUsR0FBUSxFQUFFLEVBQUU7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RTthQUFNLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsbUJBQW1CLENBQUMifQ==