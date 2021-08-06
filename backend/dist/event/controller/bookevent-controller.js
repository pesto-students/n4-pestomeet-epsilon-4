import eventDB from "../schema/event-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";
const BookEventController = (request, response) => {
    let { hasBooked, attendees } = request.body;
    let eventId = String(request.params.eventId);
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    let editEvent = {
        hasBooked: hasBooked,
        attendees: attendees
    };
    const doc = eventDB.findOneAndUpdate({ eventId: eventId, eventType: "slot" }, { $set: editEvent }, { useFindAndModify: false, new: true }, (errors, doc) => {
        if (errors) {
            response.json(message("Update Failed ! Please Try Again", null, false));
        }
        else if (!doc) {
            response.json(message("Couldn't Find the Event", null, false));
        }
        else {
            response.json(message("Event Booked Successfully", null, true));
        }
    });
};
export default BookEventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2V2ZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ldmVudC9jb250cm9sbGVyL2Jvb2tldmVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELElBQUksRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUN6QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3JCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDMUU7SUFFRCxJQUFJLFNBQVMsR0FBRztRQUNkLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBQyxTQUFTO0tBQ3BCLENBQUM7SUFDRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQ2xDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEVBQ3BDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUNuQixFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQ3RDLENBQUMsTUFBVyxFQUFFLEdBQVEsRUFBRSxFQUFFO1FBQ3hCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekU7YUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLG1CQUFtQixDQUFDIn0=