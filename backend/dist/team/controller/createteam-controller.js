import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";
const RegisterteamController = (request, response) => {
    const { teamName, teamType, batchOwnerID, batchId, mentorId, mentorName, teamMembers } = request.body;
    let newTeam = new teamDB({
        teamName: teamName.toLowerCase(),
        teamType: teamType.toLowerCase(),
        batchId: batchId,
        mentorId: mentorId,
        batchOwnerID: batchOwnerID,
        teamMembers: teamMembers,
        createTime: Date.now()
    });
    teamDB.findOne({ teamName: teamName.toLowerCase() }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while registering Team, Try Again !", null, false));
        }
        else if (!result) {
            newTeam.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Team Registered Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Team name is already taken", null, false));
        }
    });
};
export default RegisterteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRldGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2NyZWF0ZXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSx1QkFBdUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM3RCxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNwRyxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztRQUN2QixRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNoQyxPQUFPLEVBQUMsT0FBTztRQUNmLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBQyxZQUFZO1FBQ3pCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO0tBQ3ZCLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxPQUFPLENBQ1osRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQ3BDLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsb0RBQW9ELEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksS0FBSyxFQUFFO29CQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsc0JBQXNCLENBQUMifQ==