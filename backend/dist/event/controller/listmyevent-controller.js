import eventDB from "../schema/event-schema";
import userDB from "../../user/schema/user-schema";
import { message } from "../../utils/response-format";
const ListMyEventController = (request, response) => {
    const userID = request.params.userID;
    userDB
        .findOne({ id: userID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result == null) {
            response.json(message("No User Found", null, false));
        }
        else if (result.role == "super admin") {
            eventDB.find({}).populate("organiserDetail").exec(function (errors, result) {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = result.map((items) => {
                        let organiserName;
                        if (items.organiserDetail !== null) {
                            organiserName = items.organiserDetail.name;
                        }
                        else {
                            organiserName = "User Deleted";
                        }
                        return {
                            eventId: items.eventId,
                            eventName: items.eventName,
                            eventType: items.eventType,
                            eventStart: items.eventStart,
                            eventEnd: items.eventEnd,
                            eventColor: items.eventColor,
                            eventDescription: items.eventDescription,
                            hasAssignment: items.hasAssignment,
                            organiserId: items.organiserId,
                            resourceCount: items.resourceCount,
                            organiserName: organiserName,
                            attendees: items.attendees,
                        };
                    });
                    response.json(message("Events Reterived", events, true));
                }
            });
        }
        else if (result.role == "admin") {
            eventDB.find({ organiserId: userID }).populate("organiserDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = result.map((items) => {
                        let organiserName;
                        if (items.organiserDetail !== null) {
                            organiserName = items.organiserDetail.name;
                        }
                        else {
                            organiserName = "User Deleted";
                        }
                        return {
                            eventId: items.eventId,
                            eventName: items.eventName,
                            eventType: items.eventType,
                            eventStart: items.eventStart,
                            eventEnd: items.eventEnd,
                            eventColor: items.eventColor,
                            eventDescription: items.eventDescription,
                            hasAssignment: items.hasAssignment,
                            organiserId: items.organiserId,
                            resourceCount: items.resourceCount,
                            organiserName: organiserName,
                            attendees: items.attendees,
                        };
                    });
                    response.json(message("Events Reterived", events, true));
                }
            });
        }
        else if (result.role == "mentor") {
            eventDB.find({ organiserId: userID }).populate("organiserDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = result.map((items) => {
                        let organiserName;
                        if (items.organiserDetail !== null) {
                            organiserName = items.organiserDetail.name;
                        }
                        else {
                            organiserName = "User Deleted";
                        }
                        return {
                            eventId: items.eventId,
                            eventName: items.eventName,
                            eventType: items.eventType,
                            eventStart: items.eventStart,
                            eventEnd: items.eventEnd,
                            eventColor: items.eventColor,
                            eventDescription: items.eventDescription,
                            hasAssignment: items.hasAssignment,
                            organiserId: items.organiserId,
                            resourceCount: items.resourceCount,
                            organiserName: organiserName,
                            attendees: items.attendees,
                        };
                    });
                    response.json(message("Events Reterived", events, true));
                }
            });
        }
        else {
            eventDB.find({ attendees: { $elemMatch: { batchMember: { $elemMatch: { id: userID } } } } }).populate("organiserDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = result.map((items) => {
                        return {
                            eventId: items.eventId,
                            eventName: items.eventName,
                            eventType: items.eventType,
                            eventStart: items.eventStart,
                            eventEnd: items.eventEnd,
                            eventColor: items.eventColor,
                            eventDescription: items.eventDescription,
                            hasAssignment: items.hasAssignment,
                            organiserId: items.organiserId,
                            resourceCount: items.resourceCount,
                            organiserName: items.organiserDetail.name,
                            attendees: items.attendees,
                        };
                    });
                    response.json(message("Events Reterived", events, true));
                }
            });
        }
    });
};
export default ListMyEventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15ZXZlbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50L2NvbnRyb2xsZXIvbGlzdG15ZXZlbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxNQUFNO1NBQ0gsT0FBTyxDQUNOLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUNYLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDdEMsQ0FBQztTQUNIO2FBQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQVcsRUFBRSxNQUFXO2dCQUMvRSxJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMs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