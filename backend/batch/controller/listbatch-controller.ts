import batchDB from "../schema/batch-schema";
import { message } from "../../utils/response-format";

/* This module is responsible for listing batch from the system based on the
batch type*/

const ListbatchController = (request: any, response: any) => {
  const batchType = request.params.type;
  batchDB.find({ batchType: batchType }, (errors: any, result: any) => {
    if (!errors) {
      if (result.length == 0) {
        response.json(
          message("No " + String(batchType) + " Batch found", null, false)
        );
      } else {
        response.json(
          message(
            String(result.length) + " " + String(batchType) + " Batches Found",
            result,
            true
          )
        );
      }
    } else {
      response.json(message("Error while reteriving team", errors, false));
    }
  });
};

export default ListbatchController;
