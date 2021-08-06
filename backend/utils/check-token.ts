import dotenv from "dotenv";
dotenv.config();
import jwt, { Secret } from "jsonwebtoken";
import { message } from "./response-format";

/* This is the middleware module which will act as a API gateway responsible for route protection*/


function CheckToken(req: any, res: any, next: any) {
  try {
    const token = req.headers["authorization"];
    console.log(req.headers);
    if (token) {
      const authToken = token.split(" ")[1];
      console.log(authToken);
      const key = process.env.JWT_SECRET as Secret;
      let payload = jwt.verify(authToken, key, (error: any, user: any) => {
        if (error) {
          return res.json(message("Authentication Failed", error, false));
        }
        req.user = user;
        next();
      });
    } else {
      return res.json(message("Please Login", null, false));
    }
  } catch {
    return res.json(message("Authentication Error", null, false));
  }
}

export default CheckToken;
