import batchDB from "../schema/batch-schema";
import { message } from "../../utils/response-format";
const CreatebatchController = (reqest, response) => {
    const { batchName, batchType, batchOwnerID, batchOwner, batchMembers } = reqest.body;
    const newBatch = new batchDB({
        batchName: batchName.toLowerCase(),
        batchType: batchType,
        batchOwner: batchOwner,
        batchOwnerID: batchOwnerID,
        batchMembers: batchMembers,
        createTime: Date.now()
    });
    batchDB.findOne({ batchName: batchName.toLowerCase() }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while creating batch, Try Again !", null, false));
        }
        else if (!result) {
            newBatch.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Batch Created Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Batch name is already taken", null, false));
        }
    });
};
export default CreatebatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvY3JlYXRlYmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUM7UUFDM0IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsWUFBWSxFQUFDLFlBQVk7UUFDekIsWUFBWSxFQUFFLFlBQVk7UUFDMUIsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDdkIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLE9BQU8sQ0FDYixFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFDdEMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxrREFBa0QsRUFDbEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDthQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxxQkFBcUIsQ0FBQyJ9