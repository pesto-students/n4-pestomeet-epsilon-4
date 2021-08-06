import mongoose from "mongoose";
import { DB_RESOURCE_MODEL, DB_USER_MODEL, DB_EVENT_MODEL } from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";
const resourceSchema = new mongoose.Schema({
    resourceId: { type: String, required: true, default: () => uuidv4() },
    resourceName: { type: String, required: true },
    uploaderId: { type: String, required: true },
    eventId: { type: String, required: true },
    resource: { type: String, required: true },
    resourceLinks: { type: Array },
    resourceKey: { type: String, required: true },
    lastupdateTime: { type: Date, default: Date.now },
    createTime: { type: Date }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
resourceSchema.virtual('eventDetail', {
    ref: DB_EVENT_MODEL,
    localField: 'eventId',
    foreignField: 'eventId',
    justOne: true
});
resourceSchema.virtual('uploaderDetail', {
    ref: DB_USER_MODEL,
    localField: 'uploaderId',
    foreignField: 'id',
    justOne: true
});
const resourceModel = mongoose.model(DB_RESOURCE_MODEL, resourceSchema);
export default resourceModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Utc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2Uvc2NoZW1hL3Jlc291cmNlLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlCQUFpQixFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRixPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWNwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQVk7SUFDcEQsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUNwRSxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDOUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzVDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN6QyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDMUMsYUFBYSxFQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQztJQUMxQixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDN0MsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNqRCxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDO0NBQ3hCLEVBQUM7SUFDQSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFCLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDN0IsQ0FBQyxDQUFDO0FBR0gsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7SUFDcEMsR0FBRyxFQUFFLGNBQWM7SUFDbkIsVUFBVSxFQUFFLFNBQVM7SUFDckIsWUFBWSxFQUFFLFNBQVM7SUFDdkIsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDLENBQUM7QUFFSCxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZDLEdBQUcsRUFBQyxhQUFhO0lBQ2pCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4RSxlQUFlLGFBQWEsQ0FBQyJ9