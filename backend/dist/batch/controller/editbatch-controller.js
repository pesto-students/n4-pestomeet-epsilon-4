import batchDB from "../schema/batch-schema";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";
const ApprovalController = (request, response) => {
    const { batchName, batchType, batchOwner, batchMembers } = request.body;
    const batchId = request.params.id;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    let editBatches = {
        batchName: batchName.toLowerCase(),
        batchType: batchType,
        batchOwner: batchOwner,
        batchMembers: batchMembers,
    };
    const doc = batchDB.findOneAndUpdate({ batchId: batchId }, { $set: editBatches }, { useFindAndModify: false, new: true }, (errors, doc) => {
        if (errors) {
            response.json(message("Update Failed ! Please Try Again", null, false));
        }
        else if (doc == null) {
            response.json(message("Couldn't Find the Batch", null, true));
        }
        else {
            response.json(message("Batch updated successfully", null, true));
        }
    });
};
export default ApprovalController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGJhdGNoLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYXRjaC9jb250cm9sbGVyL2VkaXRiYXRjaC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ3pELE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3hFLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDckIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMxRTtJQUVELElBQUksV0FBVyxHQUFHO1FBQ2hCLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFO1FBQ2xDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFlBQVksRUFBRSxZQUFZO0tBQzNCLENBQUM7SUFDRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQ2xDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUNwQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFDckIsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUN0QyxDQUFDLE1BQVcsRUFBRSxHQUFRLEVBQUUsRUFBRTtRQUN4QixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO2FBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxrQkFBa0IsQ0FBQyJ9