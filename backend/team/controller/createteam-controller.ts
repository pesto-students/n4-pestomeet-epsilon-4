import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for creating team based on the details entered
in fron-end*/

const RegisterteamController = (request: any, response: any) => {
  const {
    teamName,
    teamType,
    batchOwnerID,
    batchId,
    mentorId,
    mentorName,
    teamMembers,
  } = request.body;
  let newTeam = new teamDB({
    teamName: teamName.toLowerCase(),
    teamType: teamType.toLowerCase(),
    batchId: batchId,
    mentorId: mentorId,
    batchOwnerID: batchOwnerID,
    teamMembers: teamMembers,
    createTime: Date.now(),
  });

  teamDB.findOne(
    { teamName: teamName.toLowerCase() },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while registering Team, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newTeam.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Team Registered Successfully", null, true));
          }
        });
      } else {
        response.json(message("Team name is already taken", null, false));
      }
    }
  );
};

export default RegisterteamController;
