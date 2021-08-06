import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userDB from "../../user/schema/user-schema";
import { message } from "../../utils/response-format";
const LoginController = (request, response) => {
    const { email, phone, password } = request.body;
    userDB.findOne({
        $and: [
            { $or: [{ email: email.toLowerCase() }, { phone: phone }] },
            { approval: process.env.APPROVED },
        ],
    }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while registering User, Try Again !", null, false));
        }
        else if (!result) {
            response.json(message("User is not registered / Activated ", null, false));
        }
        else if (bcrypt.compareSync(password, result.password)) {
            console.log("JWT Token Created");
            console.log(result);
            const key = process.env.JWT_SECRET;
            try {
                jwt.sign({ auth: true, name: result.name, id: result.id, role: result.role, user: result }, key, (error, token) => {
                    if (error) {
                        response.json(message("Login Error", error, false));
                    }
                    else {
                        response.json(message("Login Success", token, true));
                        console.log(token);
                    }
                });
            }
            catch (_a) {
                response.json(message("Authentication Error", null, false));
            }
        }
        else if (!bcrypt.compareSync(password, result.password)) {
            response.json(message("Wrong Username/Password", null, false));
        }
        else {
            response.json(message("Error Happened while registering User, Try Again !", null, false));
        }
    });
};
export default LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2NvbnRyb2xsZXIvbG9naW4tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxHQUFlLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sTUFBTSxNQUFNLCtCQUErQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQ1o7UUFDRSxJQUFJLEVBQUU7WUFDSixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDM0QsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7U0FDbkM7S0FDRixFQUNELENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsb0RBQW9ELEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDNUQsQ0FBQztTQUNIO2FBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFvQixDQUFDO1lBQzdDLElBQUk7Z0JBQ0YsR0FBRyxDQUFDLElBQUksQ0FDTixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUcsSUFBSSxFQUFDLE1BQU0sRUFBRSxFQUNqRixHQUFHLEVBQ0gsQ0FBQyxLQUFVLEVBQUUsS0FBVSxFQUFFLEVBQUU7b0JBQ3pCLElBQUksS0FBSyxFQUFFO3dCQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDckQ7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNwQjtnQkFDSCxDQUFDLENBQ0YsQ0FBQzthQUNIO1lBQUMsV0FBTTtnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM3RDtTQUNGO2FBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6RCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsb0RBQW9ELEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQ0YsQ0FBQTtBQUNILENBQUMsQ0FBQztBQUVGLGVBQWUsZUFBZSxDQUFDIn0=