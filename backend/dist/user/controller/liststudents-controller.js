import userDB from "../schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";
const ListuserController = (request, response) => {
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
            userDB.find({}, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Student", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Student Found", null, false));
                }
                else {
                    response.json(message("Students Reterived", result, true));
                }
            }).select("-password").select("-_id");
        }
        else if (result.role == "admin") {
            batchDB.find({ batchOwnerID: userID }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Student", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Student Found", null, false));
                }
                else {
                    let student = result.map((member, index) => {
                        return member.batchMembers;
                    });
                    let students = [].concat.apply([], student);
                    students = students.filter((v, i, a) => a.findIndex((t) => (JSON.stringify(t) === JSON.stringify(v))) === i);
                    response.json(message("Students Reterived", students, true));
                }
            });
        }
        else if (result.role == "mentor") {
            teamDB.find({ mentorId: userID }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Student", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Student Found", null, false));
                }
                else {
                    let student = result.map((member, index) => {
                        return member.teamMembers;
                    });
                    let students = [].concat.apply([], student);
                    students = students.filter((v, i, a) => a.findIndex((t) => (JSON.stringify(t) === JSON.stringify(v))) === i);
                    response.json(message("Students Reterived", students, true));
                }
            });
        }
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default ListuserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHN0dWRlbnRzLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2NvbnRyb2xsZXIvbGlzdHN0dWRlbnRzLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sdUJBQXVCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0saUNBQWlDLENBQUM7QUFDdEQsT0FBTyxNQUFNLE1BQU0sK0JBQStCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDekQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsTUFBTTtTQUNILE9BQU8sQ0FDTixFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFDWCxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3RDLENBQUM7U0FDSDthQUFNLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksTUFBTSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FB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