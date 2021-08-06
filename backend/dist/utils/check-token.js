import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';
import { message } from "./response-format";
function CheckToken(req, res, next) {
    try {
        const token = req.headers["authorization"];
        console.log(req.headers);
        if (token) {
            const authToken = token.split(' ')[1];
            console.log(authToken);
            const key = process.env.JWT_SECRET;
            let payload = jwt.verify(authToken, key, (error, user) => {
                if (error) {
                    return res.json(message("Authentication Failed", error, false));
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.json(message("Please Login", null, false));
        }
    }
    catch (_a) {
        return res.json(message("Authentication Error", null, false));
    }
}
export default CheckToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9jaGVjay10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE9BQU8sR0FBZSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsU0FBUyxVQUFVLENBQUMsR0FBTyxFQUFDLEdBQU8sRUFBQyxJQUFRO0lBQzFDLElBQUc7UUFDSCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hCLElBQUcsS0FBSyxFQUFDO1lBQ1AsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3RCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBb0IsQ0FBQztZQUM3QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxLQUFTLEVBQUMsSUFBUSxFQUFDLEVBQUU7Z0JBQ3pELElBQUksS0FBSyxFQUFFO29CQUNQLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUcsS0FBSyxFQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3JFO2dCQUNELEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBSTtZQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFHLElBQUksRUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNEO0tBQ0E7SUFBQSxXQUFLO1FBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRyxJQUFJLEVBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNuRTtBQUNELENBQUM7QUFHRCxlQUFlLFVBQVUsQ0FBQyJ9