import userDB from "../schema/user-schema";
import { message } from "../../utils/response-format";
const ListalluserController = (request, response) => {
    userDB
        .find({}, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No user is registered", null, false));
        }
        else {
            response.json(message(String(result.length) + " users reterived ", result, true));
        }
    })
        .select("-password")
        .select("-_id");
};
export default ListalluserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFsbHVzZXItY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIvY29udHJvbGxlci9saXN0YWxsdXNlci1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHVCQUF1QixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLHFCQUFxQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzVELE1BQU07U0FDSCxJQUFJLENBQUMsRUFBRSxFQUNOLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDOUMsQ0FBQztTQUNIO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLG1CQUFtQixFQUMzQyxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGO1NBQ0EsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsZUFBZSxxQkFBcUIsQ0FBQyJ9