import batchDB from "../schema/batch-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for creating batch based on the details entered
in fron-end*/


const CreatebatchController = (reqest: any, response: any) => {
  const { batchName, batchType, batchOwnerID, batchOwner, batchMembers } =
    reqest.body;
  const newBatch = new batchDB({
    batchName: batchName.toLowerCase(),
    batchType: batchType,
    batchOwner: batchOwner,
    batchOwnerID: batchOwnerID,
    batchMembers: batchMembers,
    createTime: Date.now(),
  });

  batchDB.findOne(
    { batchName: batchName.toLowerCase() },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while creating batch, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newBatch.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Batch Created Successfully", null, true));
          }
        });
      } else {
        response.json(message("Batch name is already taken", null, false));
      }
    }
  );
};

export default CreatebatchController;
