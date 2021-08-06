import announcementDB from "../schema/announcement-schema";
import { message } from "../../utils/response-format";
const DeleteannouncementController = (request, response) => {
    const announcementId = request.params.id;
    announcementDB.findOneAndDelete({ announcementId: announcementId }, {}, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting Announcenment", null, false));
        }
        else if (!docs) {
            response.json(message("Announcement Not Found", docs, false));
        }
        else {
            response.json(message("Announcement deleted successfully", docs, true));
        }
    });
};
export default DeleteannouncementController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlYW5ub3VuY2VtZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hbm5vdW5jZW1lbnQvY29udHJvbGxlci9kZWxldGVhbm5vdW5jZW1lbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSw0QkFBNEIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUNuRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN6QyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxFQUFFO1FBQ2pHLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0U7YUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSw0QkFBNEIsQ0FBQyJ9