import moment from 'moment';
import eventDB, { eventSchema } from "../event/schema/event-schema";
import batchDB from "../batch/schema/batch-schema";
import userDB from "../user/schema/user-schema";
import { ACCOUNT_ID, AUTH_TOKEN, MSG_ID, COUNTRY_CODE } from "../utils/app-constants";
import twilio from 'twilio';
const requireNotification = (appointment) => {
    const searchDate = moment(new Date()).tz("Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6").format();
    const eventDate = moment(appointment.eventStart).tz("Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6").format();
    let time = Math.round(moment.duration(moment(eventDate).utc().diff(moment(searchDate).utc())).asMinutes()) === 15;
    console.log(time);
    console.log(searchDate);
    console.log(eventDate);
    return time;
};
eventSchema.statics.sendNotifications = (callback) => {
    eventDB.find({}, (error, result) => {
        if (error) {
            console.log(error);
        }
        else if (!result) {
            console.log("No events found");
        }
        else {
            const appointments = result.filter(requireNotification);
            if (appointments.length > 0) {
                appointments.map((appointment) => {
                    sendNotifications(appointment);
                });
            }
        }
    });
    const sendNotifications = (appointment) => {
        const client = twilio(ACCOUNT_ID, AUTH_TOKEN);
        const batches = appointment.attendees;
        console.log(batches);
        batches.map((batch) => {
            console.log(batch);
            batchDB.findOne({ batchId: batch.batchId }, (error, result) => {
                if (error) {
                    console.log(error);
                }
                else if (!result) {
                    console.log("No batch found");
                }
                else {
                    let members = result.batchMembers;
                    members.map((member) => {
                        userDB.findOne({ id: member.id }, (error, result) => {
                            if (error) {
                                console.log(error);
                            }
                            else if (!result) {
                                console.log("No user found");
                            }
                            else {
                                const options = {
                                    body: "Hi " + result.name + ", Pesto " + appointment.eventType + "Event will start on" +
                                        appointment.eventStart + "Kindly Attend Without Fail",
                                    messagingServiceSid: MSG_ID,
                                    to: COUNTRY_CODE + result.phone
                                };
                                // Send the message!
                                client.messages.create(options, function (err, response) {
                                    if (err) {
                                        // Just log it for now
                                        console.error(err);
                                    }
                                    else {
                                        // Log the last few digits of a phone number
                                        console.log(`Notification sent to ` + options.to);
                                    }
                                });
                            }
                        });
                        if (callback) {
                            callback.call();
                        }
                    });
                }
            });
        });
    };
};
export default eventSchema.statics.sendNotifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ub3RpZmljYXRpb24vYXBwb2ludG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE9BQU8sT0FBTyxFQUFDLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxPQUFPLE1BQU0sOEJBQThCLENBQUM7QUFDbkQsT0FBTyxNQUFNLE1BQU0sNEJBQTRCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2xGLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUk1QixNQUFNLG1CQUFtQixHQUFHLENBQUMsV0FBZSxFQUFDLEVBQUU7SUFDM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMscUZBQXFGLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN4SSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxxRkFBcUYsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25KLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUM3RixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN2QixPQUFP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