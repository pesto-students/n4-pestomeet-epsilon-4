import announcementDB from "../schema/announcement-schema";
import { message } from "../../utils/response-format";
const CreateAnnouncementController = (request, response) => {
    const { announcementName, announcementDescription } = request.body;
    let newAnnouncement = new announcementDB({
        announcementName: announcementName.toLowerCase(),
        announcementDescription: announcementDescription,
        createTime: Date.now()
    });
    announcementDB.findOne({ announcementName: announcementName.toLowerCase() }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while submitting announcement, Try Again !", null, false));
        }
        else if (!result) {
            newAnnouncement.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Announcement Submitted Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Announcement is already submitted", null, false));
        }
    });
};
export default CreateAnnouncementController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYW5ub3VuY2VtZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hbm5vdW5jZW1lbnQvY29udHJvbGxlci9jcmVhdGVhbm5vdW5jZW1lbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSw0QkFBNEIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUNuRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2xFLElBQUksZUFBZSxHQUFHLElBQUksY0FBYyxDQUFDO1FBQ3ZDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRTtRQUNoRCx1QkFBdUIsRUFBQyx1QkFBdUI7UUFDL0MsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDdkIsQ0FBQyxDQUFDO0lBRUgsY0FBYyxDQUFDLE9BQU8sQ0FDcEIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsRUFBQyxFQUNuRCxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLDJEQUEyRCxFQUMzRCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztTQUNIO2FBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUMvQyxJQUFJLEtBQUssRUFBRTtvQkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMzRTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLDRCQUE0QixDQUFDIn0=