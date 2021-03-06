import mongoose from "mongoose";
import { DB_ASSIGNMENT_MODEL } from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";
const assignmentSchema = new mongoose.Schema({
    assignmentId: { type: String, required: true, default: () => uuidv4() },
    assignmentName: { type: String, required: true },
    uploaderId: { type: String, required: true },
    uploaderName: { type: String, required: true },
    eventID: { type: String, required: true },
    eventName: { type: String, required: true },
    eventType: { type: String, require: true },
    assignmentLinks: { type: Array, require: true },
    lastupdateTime: { type: Date, default: Date.now },
});
const assignmentModel = mongoose.model(DB_ASSIGNMENT_MODEL, assignmentSchema);
export default assignmentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWdubWVudC1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hc3NpZ25tZW50cy9zY2hlbWEvYXNzaWdubWVudC1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBY3BDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFjO0lBQ3hELFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDdEUsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2hELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM1QyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDOUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3pDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMzQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDMUMsZUFBZSxFQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzVDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Q0FDbEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlFLGVBQWUsZUFBZSxDQUFDIn0=