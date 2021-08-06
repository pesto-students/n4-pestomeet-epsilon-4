import userDB from "../schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";
const CountMyAssetsController = (request, response) => {
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
            Promise.all([
                userDB.countDocuments({ role: "student" }),
                userDB.countDocuments({ role: "mentor" }),
                userDB.countDocuments({ role: "admin" }),
                batchDB.countDocuments({}),
                teamDB.countDocuments({}),
            ]).then(([studentCount, mentorCount, adminCount, batchCount, teamCount]) => {
                let countDetails = {
                    studentCount: studentCount,
                    mentorCount: mentorCount,
                    adminCount: adminCount,
                    batchCount: batchCount,
                    teamCount: teamCount
                };
                response.json(message("Counts Reterived for Super Admin", countDetails, true));
            });
        }
        else if (result.role == "admin") {
            let batch;
            Promise.all([
                batchDB.countDocuments({ batchOwnerID: userID }),
                batchDB.find({ batchOwnerID: userID }),
                teamDB.countDocuments({ batchOwnerID: userID }),
            ]).then(([batchCount, students, teamCount,]) => {
                let student = students.map((member, index) => {
                    return member.batchMembers;
                });
                student = [].concat.apply([], student);
                let userDetails = student.filter((v, i, a) => a.findIndex((t) => (JSON.stringify(t) === JSON.stringify(v))) === i);
                let studentDetails = userDetails.filter((item) => {
                    return item.role === 'student';
                });
                let mentorDetails = userDetails.filter((item) => {
                    return item.role === 'mentor';
                });
                let studentCount = studentDetails.length;
                let mentorCount = mentorDetails.length;
                let countDetails = {
                    studentCount: studentCount,
                    mentorCount: mentorCount,
                    batchCount: batchCount,
                    teamCount: teamCount
                };
                response.json(message("Counts Reterived for  Admin", countDetails, true));
            });
        }
        else if (result.role == "mentor") {
            let batch;
            Promise.all([
                teamDB.countDocuments({ mentorId: userID }),
                teamDB.find({ mentorId: userID })
            ]).then(([teamCount, students]) => {
                let student = students.map((member, index) => {
                    return member.teamMembers;
                });
                student = [].concat.apply([], student);
                let studentDetails = student.filter((v, i, a) => a.findIndex((t) => (JSON.stringify(t) === JSON.stringify(v))) === i);
                let studentCount = studentDetails.length;
                let countDetails = {
                    studentCount: studentCount,
                    teamCount: teamCount
                };
                response.json(message("Counts Reterived for Mentor", countDetails, true));
            });
        }
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default CountMyAssetsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRteWFzc2V0cy1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlci9jb250cm9sbGVyL2NvdW50bXlhc3NldHMtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSx1QkFBdUIsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM5RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxNQUFNO1NBQ0gsT0FBTyxDQUNOLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUNYLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDdEMsQ0FBQztTQUNIO2FBQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNSLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxj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