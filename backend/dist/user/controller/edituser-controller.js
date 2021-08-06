import userDB from "../schema/user-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";
const ApprovalController = (request, response) => {
    let { name, email, phone, role, experience, approval } = request.body;
    let id = String(request.params.id);
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    let editUser = {
        id: id,
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        phone: phone,
        role: role.toLowerCase(),
        experience: experience,
        approval: approval.toLowerCase(),
    };
    const doc = userDB.findOneAndUpdate({ id: id }, { $set: editUser }, { useFindAndModify: false, new: true }, (errors, doc) => {
        if (errors) {
            response.json(message("Update Failed ! Please Try Again", null, false));
        }
        else if (!doc) {
            response.json(message("Couldn't Find the user", null, false));
        }
        else {
            response.json(message("Status Updated Successfully", null, true));
        }
    });
};
export default ApprovalController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHVzZXItY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIvY29udHJvbGxlci9lZGl0dXNlci1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHVCQUF1QixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ3pELElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDdEUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNyQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFFO0lBRUQsSUFBSSxRQUFRLEdBQUc7UUFDYixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO1FBQzFCLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDeEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUU7S0FDakMsQ0FBQztJQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDakMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ1YsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQ2xCLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDdEMsQ0FBQyxNQUFXLEVBQUUsR0FBUSxFQUFFLEVBQUU7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RTthQUFNLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsa0JBQWtCLENBQUMifQ==