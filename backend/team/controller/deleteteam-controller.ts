import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for deleting team from the system */

const DeleteteamController = (request: any, response: any) => {
  const id = request.params.id;
  teamDB.findOneAndDelete({ teamId: id }, {}, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting User", null, false));
    } else if (!docs) {
      response.json(message("Team Not Found", docs, false));
    } else {
      response.json(message("Team deleted successfully", docs, true));
    }
  });
};

export default DeleteteamController;
