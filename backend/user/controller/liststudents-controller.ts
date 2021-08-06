import userDB from "../schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing associated users for the given userID, 
 for example: students available in admin's batch , student's availabel in mentor's
 team ... etc*/

const ListuserController = (request: any, response: any) => {
  const userID = request.params.userID;
  userDB.findOne({ id: userID }, (errors: any, result: any) => {
    if (errors) {
      response.json(message("Error while reteriving user", errors, false));
    } else if (result == null) {
      response.json(message("No User Found", null, false));
    } else if (result.role == "super admin") {
      userDB
        .find({}, (errors: any, result: any) => {
          if (errors) {
            response.json(
              message("Error while reteriving Student", errors, false)
            );
          } else if (result.length == 0) {
            response.json(message("No Student Found", null, false));
          } else {
            response.json(message("Students Reterived", result, true));
          }
        })
        .select("-password")
        .select("-_id");
    } else if (result.role == "admin") {
      batchDB.find({ batchOwnerID: userID }, (errors: any, result: any) => {
        if (errors) {
          response.json(
            message("Error while reteriving Student", errors, false)
          );
        } else if (result.length == 0) {
          response.json(message("No Student Found", null, false));
        } else {
          let student = result.map((member: any, index: any) => {
            return member.batchMembers;
          });
          let students = [].concat.apply([], student);
          students = students.filter(
            (v: any, i: any, a: any) =>
              a.findIndex(
                (t: any) => JSON.stringify(t) === JSON.stringify(v)
              ) === i
          );
          response.json(message("Students Reterived", students, true));
        }
      });
    } else if (result.role == "mentor") {
      teamDB.find({ mentorId: userID }, (errors: any, result: any) => {
        if (errors) {
          response.json(
            message("Error while reteriving Student", errors, false)
          );
        } else if (result.length == 0) {
          response.json(message("No Student Found", null, false));
        } else {
          let student = result.map((member: any, index: any) => {
            return member.teamMembers;
          });

          let students = [].concat.apply([], student);
          students = students.filter(
            (v: any, i: any, a: any) =>
              a.findIndex(
                (t: any) => JSON.stringify(t) === JSON.stringify(v)
              ) === i
          );
          response.json(message("Students Reterived", students, true));
        }
      });
    } else {
      response.json(message("Not Applicable for Students", null, false));
    }
  });
};

export default ListuserController;
