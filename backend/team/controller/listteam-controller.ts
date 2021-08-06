import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing team based on team type*/

const ListteamController = (request: any, response: any) => {
  const teamType = request.params.type;
  teamDB
    .find({ teamType: teamType.toLowerCase() })
    .populate("batchDetail")
    .populate("mentorDetail")
    .exec((errors: any, result: any) => {
      if (errors) {
        response.json(message("Error while reteriving team", errors, false));
      } else if (result.length == 0) {
        response.json(
          message("No " + String(teamType) + " Team found", null, false)
        );
      } else {
        let adminTeam = result.map((items) => {
          console.log(items);
          let batchName, batchOwner, mentorName;
          if (items.batchDetail !== null) {
            batchName = items.batchDetail.batchName;
          } else {
            batchName = "Batch Deleted";
          }

          if (items.batchDetail !== null) {
            batchOwner = items.batchDetail.batchOwner;
          } else {
            batchOwner = "Batch Deleted";
          }

          if (items.mentorDetail !== null) {
            mentorName = items.mentorDetail.name;
          } else {
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
            teamMembers: items.teamMembers,
          };
        });

        response.json(
          message(
            String(result.length) + " " + String(teamType) + " Teams Found",
            adminTeam,
            true
          )
        );
      }
    });
};

export default ListteamController;
