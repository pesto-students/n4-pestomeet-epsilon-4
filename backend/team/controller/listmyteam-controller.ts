import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";
import _ from "lodash";

/* This module is responsible for listing associated the for the given userID, 
 for example: teams available in admin's batch , team availabe under mentor's
 ... etc*/

const ListMyTeamController = (request: any, response: any) => {
  const userID = request.params.userID;
  userDB.findOne({ id: userID }, (errors: any, result: any) => {
    if (errors) {
      response.json(message("Error while reteriving user", errors, false));
    } else if (result == null) {
      response.json(message("No User Found", null, false));
    } else if (result.role == "super admin") {
      teamDB
        .find({})
        .populate("batchDetail")
        .populate("mentorDetail")
        .exec(function (errors: any, result: any) {
          if (errors) {
            response.json(
              message("Error while reteriving Batch", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Team Found", null, false));
          } else {
            let adminTeam = result.map((items) => {
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

            response.json(message("Teams Found", adminTeam, true));
          }
        });
    } else if (result.role == "admin") {
      batchDB.find({ batchOwnerID: userID }, (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving Batch", errors, false));
        } else if (result.length == 0) {
          response.json(message("No Batch Found", null, false));
        } else {
          let batch = result.map((member: any, index: any) => {
            return member.batchId;
          });

          teamDB
            .find({ batchId: { $in: batch } })
            .populate("batchDetail")
            .populate("mentorDetail")
            .exec((errors: any, result: any) => {
              if (errors) {
                response.json(
                  message("Error while reteriving Batch", errors, false)
                );
              } else if (result.length == 0) {
                response.json(message("No Team Found", null, false));
              } else {
                let adminTeam = result.map((items) => {
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

                response.json(message("Teams Found", adminTeam, false));
              }
            });
        }
      });
    } else if (result.role == "mentor") {
      teamDB
        .find({ mentorId: userID })
        .populate("batchDetail")
        .populate("mentorDetail")
        .exec((errors: any, result: any) => {
          if (errors) {
            response.json(
              message("Error while reteriving Team", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Team Found", null, false));
          } else {
            let adminTeam = result.map((items) => {
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

            response.json(message("Teams Found", adminTeam, true));
          }
        });
    } else {
      response.json(message("Not Applicable for Students", null, false));
    }
  });
};

export default ListMyTeamController;
