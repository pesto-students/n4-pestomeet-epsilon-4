import userDB from "../schema/user-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";

/* This module is responsible for deleting register user from the system*/

const ApprovalController = (request: any, response: any) => {
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
  const doc = userDB.findOneAndUpdate(
    { id: id },
    { $set: editUser },
    { useFindAndModify: false, new: true },
    (errors: any, doc: any) => {
      if (errors) {
        response.json(message("Update Failed ! Please Try Again", null, false));
      } else if (!doc) {
        response.json(message("Couldn't Find the user", null, false));
      } else {
        response.json(message("Status Updated Successfully", null, true));
      }
    }
  );
};

export default ApprovalController;
