import userDB from "../schema/user-schema";
import { message } from "../../utils/response-format";
const ListuserController = (request, response) => {
    const status = request.params.status;
    const role = request.params.role;
    userDB
        .find({ approval: status.toLowerCase(), role: role.toLowerCase() }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No user is in " + String(status) + " Status", null, false));
        }
        else {
            response.json(message(String(result.length) + " users on " + String(status) + " Status", result, true));
        }
    })
        .select("-password")
        .select("-_id");
};
export default ListuserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHVzZXItY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIvY29udHJvbGxlci9saXN0dXNlci1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHVCQUF1QixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ3pELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2pDLE1BQU07U0FDSCxJQUFJLENBQ0gsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFDNUQsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RTthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3BFLENBQUM7U0FDSDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsRUFDakUsTUFBTSxFQUNOLElBQUksQ0FDTCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRjtTQUNBLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGLGVBQWUsa0JBQWtCLENBQUMifQ==