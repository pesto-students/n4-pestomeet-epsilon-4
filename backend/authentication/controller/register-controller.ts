import userDB from "../../user/schema/user-schema";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";

/* This module is responsible for handling registration functionaloty of the application*/

const RegisterController = (reqest: any, response: any) => {
  const { name, email, phone, password, role, experience, approval } =
    reqest.body;
  const errors = validationResult(reqest);
  if (!errors.isEmpty()) {
    return response.json(message("Validation Error", errors.array(), false));
  }

  const hash = bcrypt.hashSync(password, 10);
  const newUser = new userDB({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    phone: phone,
    password: hash,
    role: role.toLowerCase(),
    experience: experience,
    approval: approval.toLowerCase(),
    createTime: Date.now(),
  });

  userDB.findOne(
    { $or: [{ email: email.toLowerCase() }, { phone: phone }] },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while registering User, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newUser.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("User Registered Successfully", null, true));
          }
        });
      } else {
        console.log(result);
        response.json(message("User Already Available", null, false));
      }
    }
  );
};

export default RegisterController;
