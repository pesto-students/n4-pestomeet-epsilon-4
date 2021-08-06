import userDB from "../schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";

/* This module is responsible providing various counts based on user profile which will be displayed 
on users landing page*/

const CountMyAssetsController = (request: any, response: any) => {
  const userID = request.params.userID;
  userDB.findOne({ id: userID }, (errors: any, result: any) => {
    if (errors) {
      response.json(message("Error while reteriving user", errors, false));
    } else if (result == null) {
      response.json(message("No User Found", null, false));
    } else if (result.role == "super admin") {
      Promise.all([
        userDB.countDocuments({ role: "student" }),
        userDB.countDocuments({ role: "mentor" }),
        userDB.countDocuments({ role: "admin" }),
        batchDB.countDocuments({}),
        teamDB.countDocuments({}),
      ]).then(
        ([studentCount, mentorCount, adminCount, batchCount, teamCount]) => {
          let countDetails = {
            studentCount: studentCount,
            mentorCount: mentorCount,
            adminCount: adminCount,
            batchCount: batchCount,
            teamCount: teamCount,
          };
          response.json(
            message("Counts Reterived for Super Admin", countDetails, true)
          );
        }
      );
    } else if (result.role == "admin") {
      let batch;
      Promise.all([
        batchDB.countDocuments({ batchOwnerID: userID }),
        batchDB.find({ batchOwnerID: userID }),
        teamDB.countDocuments({ batchOwnerID: userID }),
      ]).then(([batchCount, students, teamCount]) => {
        let student = students.map((member: any, index: any) => {
          return member.batchMembers;
        });
        student = [].concat.apply([], student);
        let userDetails = student.filter(
          (v: any, i: any, a: any) =>
            a.findIndex((t: any) => JSON.stringify(t) === JSON.stringify(v)) ===
            i
        );
        let studentDetails = userDetails.filter((item: any) => {
          return item.role === "student";
        });
        let mentorDetails = userDetails.filter((item: any) => {
          return item.role === "mentor";
        });
        let studentCount = studentDetails.length;
        let mentorCount = mentorDetails.length;
        let countDetails = {
          studentCount: studentCount,
          mentorCount: mentorCount,
          batchCount: batchCount,
          teamCount: teamCount,
        };
        response.json(
          message("Counts Reterived for  Admin", countDetails, true)
        );
      });
    } else if (result.role == "mentor") {
      let batch;
      Promise.all([
        teamDB.countDocuments({ mentorId: userID }),
        teamDB.find({ mentorId: userID }),
      ]).then(([teamCount, students]) => {
        let student = students.map((member: any, index: any) => {
          return member.teamMembers;
        });
        student = [].concat.apply([], student);
        let studentDetails = student.filter(
          (v: any, i: any, a: any) =>
            a.findIndex((t: any) => JSON.stringify(t) === JSON.stringify(v)) ===
            i
        );
        let studentCount = studentDetails.length;
        let countDetails = {
          studentCount: studentCount,
          teamCount: teamCount,
        };
        response.json(
          message("Counts Reterived for Mentor", countDetails, true)
        );
      });
    } else {
      response.json(message("Not Applicable for Students", null, false));
    }
  });
};

export default CountMyAssetsController;
