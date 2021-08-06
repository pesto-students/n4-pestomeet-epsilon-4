import announcementDB from "../schema/announcement-schema";
import { message } from "../../utils/response-format";
const ListannouncementController = (request, response) => {
    announcementDB
        .find({}, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving announcement", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No announcement available for the event", null, false));
        }
        else {
            response.json(message(String(result.length) + " Announcement available for the event ", result, true));
        }
    });
};
export default ListannouncementController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFubm91bmNlbWVudC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYW5ub3VuY2VtZW50L2NvbnRyb2xsZXIvbGlzdGFubm91bmNlbWVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sY0FBYyxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLDBCQUEwQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ2pFLGNBQWM7U0FDWCxJQUFJLENBQ0gsRUFBRSxFQUNGLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLHlDQUF5QyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDaEUsQ0FBQztTQUNIO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLHdDQUF3QyxFQUNoRSxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixlQUFlLDBCQUEwQixDQUFDIn0=