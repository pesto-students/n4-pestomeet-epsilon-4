import userDB from "../schema/user-schema";
import { message } from "../../utils/response-format";

/* This module is responsible deleteing registered user from the application*/

const DeleteuserController = (request: any, response: any) => {
  const id = request.params.id;
  userDB.findOneAndDelete({ id: id }, {}, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting User", null, false));
    } else if (!docs) {
      response.json(message("User Not Found", docs, false));
    } else {
      response.json(message("User deleted successfully", docs, true));
    }
  });
};

export default DeleteuserController;
