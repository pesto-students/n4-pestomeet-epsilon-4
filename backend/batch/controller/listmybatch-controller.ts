import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for editing team from the system based on the
changed values submitted through front-end*/

const ListMyBatchController = (request: any, response: any) => {
  const userID = request.params.userID;
  userDB.findOne({ id: userID }, (errors: any, result: any) => {
    if (errors) {
      response.json(message("Error while reteriving user", errors, false));
    } else if (result == null) {
      response.json(message("No User Found", null, false));
    } else if (result.role == "super admin") {
      batchDB.find({}, (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving Batch", errors, false));
        } else if (result.length == 0) {
          response.json(message("No Batch Found", null, false));
        } else {
          response.json(message("Batch Reterived", result, true));
        }
      });
    } else if (result.role == "admin") {
      batchDB.find({ batchOwnerID: userID }, (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving Batch", errors, false));
        } else if (result.length == 0) {
          response.json(message("No Batch Found", null, false));
        } else {
          response.json(message("Batches Reterived", result, true));
        }
      });
    } else if (result.role == "mentor") {
      response.json(message("Not Applicable for Mentors", null, false));
    } else {
      response.json(message("Not Applicable for Students", null, false));
    }
  });
};

export default ListMyBatchController;
