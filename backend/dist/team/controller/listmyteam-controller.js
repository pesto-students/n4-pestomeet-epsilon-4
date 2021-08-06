import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";
/* This module serves as the controller for the API "api/pesto/list/mybatch/" which get userID
as a params and list batches based on userrole */
const ListMyTeamController = (request, response) => {
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
            teamDB.find({}).populate("batchDetail").populate("mentorDetail").exec(function (errors, result) {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Team Found", null, false));
                }
                else {
                    let adminTeam = result.map((items) => {
                        let batchName, batchOwner, mentorName;
                        if (items.batchDetail !== null) {
                            batchName = items.batchDetail.batchName;
                        }
                        else {
                            batchName = "Batch Deleted";
                        }
                        if (items.batchDetail !== null) {
                            batchOwner = items.batchDetail.batchOwner;
                        }
                        else {
                            batchOwner = "Batch Deleted";
                        }
                        if (items.mentorDetail !== null) {
                            mentorName = items.mentorDetail.name;
                        }
                        else {
                            mentorName = "Mentor Deleted";
                        }
                        return {
                            teamId: items.teamId,
                            teamName: items.teamName,
                            teamType: items.teamType,
                            batchId: items.batchId,
                            batchName: batchName,
                            batchOwner: batchOwner,
                            batchOwnerID: items.batchOwnerID,
                            mentorId: items.mentorId,
                            mentorName: mentorName,
                            teamMembers: items.teamMembers
                        };
                    });
                    response.json(message("Teams Found", adminTeam, true));
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
                    let batch = result.map((member, index) => {
                        return member.batchId;
                    });
                    teamDB.find({ batchId: { $in: batch } }).populate("batchDetail").populate("mentorDetail").exec((errors, result) => {
                        if (errors) {
                            response.json(message("Error while reteriving Batch", errors, false));
                        }
                        else if (result.length == 0) {
                            response.json(message("No Team Found", null, false));
                        }
                        else {
                            let adminTeam = result.map((items) => {
                                let batchName, batchOwner, mentorName;
                                if (items.batchDetail !== null) {
                                    batchName = items.batchDetail.batchName;
                                }
                                else {
                                    batchName = "Batch Deleted";
                                }
                                if (items.batchDetail !== null) {
                                    batchOwner = items.batchDetail.batchOwner;
                                }
                                else {
                                    batchOwner = "Batch Deleted";
                                }
                                if (items.mentorDetail !== null) {
                                    mentorName = items.mentorDetail.name;
                                }
                                else {
                                    mentorName = "Mentor Deleted";
                                }
                                return {
                                    teamId: items.teamId,
                                    teamName: items.teamName,
                                    teamType: items.teamType,
                                    batchId: items.batchId,
                                    batchName: batchName,
                                    batchOwner: batchOwner,
                                    batchOwnerID: items.batchOwnerID,
                                    mentorId: items.mentorId,
                                    mentorName: mentorName,
                                    teamMembers: items.teamMembers
                                };
                            });
                            response.json(message("Teams Found", adminTeam, false));
                        }
                    });
                }
            });
        }
        else if (result.role == "mentor") {
            teamDB.find({ mentorId: userID }).populate("batchDetail").populate("mentorDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Team", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Team Found", null, false));
                }
                else {
                    let adminTeam = result.map((items) => {
                        let batchName, batchOwner, mentorName;
                        if (items.batchDetail !== null) {
                            batchName = items.batchDetail.batchName;
                        }
                        else {
                            batchName = "Batch Deleted";
                        }
                        if (items.batchDetail !== null) {
                            batchOwner = items.batchDetail.batchOwner;
                        }
                        else {
                            batchOwner = "Batch Deleted";
                        }
                        if (items.mentorDetail !== null) {
                            mentorName = items.mentorDetail.name;
                        }
                        else {
                            mentorName = "Mentor Deleted";
                        }
                        return {
                            teamId: items.teamId,
                            teamName: items.teamName,
                            teamType: items.teamType,
                            batchId: items.batchId,
                            batchName: batchName,
                            batchOwner: batchOwner,
                            batchOwnerID: items.batchOwnerID,
                            mentorId: items.mentorId,
                            mentorName: mentorName,
                            teamMembers: items.teamMembers
                        };
                    });
                    response.json(message("Teams Found", adminTeam, true));
                }
            });
        }
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default ListMyTeamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15dGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2xpc3RteXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEQ7aURBQ2lEO0FBRWpELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsTUFBTTtTQUNILE9BQU8sQ0FDTixFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFDWCxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3RDLENBQUM7U0FDSDthQUFNLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQVcsRUFBRSxNQUFXO2dCQUNuRyxJQUFJLE1BQU0sRUFBRTtvQkFDVixR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