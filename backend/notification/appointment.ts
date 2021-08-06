import moment from "moment";
import { tz } from "moment-timezone";
import eventDB, { eventSchema } from "../event/schema/event-schema";
import batchDB from "../batch/schema/batch-schema";
import userDB from "../user/schema/user-schema";
import {
  ACCOUNT_ID,
  AUTH_TOKEN,
  MSG_ID,
  COUNTRY_CODE,
} from "../utils/app-constants";
import twilio from "twilio";

/* This module is responsible for utilizing twilio for sending notifications*/

const requireNotification = (appointment: any) => {
  const searchDate = moment(new Date())
    .tz(
      "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6"
    )
    .format();
  const eventDate = moment(appointment.eventStart)
    .tz(
      "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6"
    )
    .format();
  let time =
    Math.round(
      moment
        .duration(moment(eventDate).utc().diff(moment(searchDate).utc()))
        .asMinutes()
    ) === 15;
  console.log(time);
  console.log(searchDate);
  console.log(eventDate);
  return time;
};

eventSchema.statics.sendNotifications = (callback) => {
  eventDB.find({}, (error: any, result: any) => {
    if (error) {
      console.log(error);
    } else if (!result) {
      console.log("No events found");
    } else {
      const appointments = result.filter(requireNotification);
      if (appointments.length > 0) {
        appointments.map((appointment: any) => {
          sendNotifications(appointment);
        });
      }
    }
  });

  const sendNotifications = (appointment: any) => {
    const client = twilio(ACCOUNT_ID, AUTH_TOKEN);
    const batches = appointment.attendees;
    console.log(batches);
    batches.map((batch: any) => {
      console.log(batch);
      batchDB.findOne({ batchId: batch.batchId }, (error: any, result: any) => {
        if (error) {
          console.log(error);
        } else if (!result) {
          console.log("No batch found");
        } else {
          let members = result.batchMembers;
          members.map((member: any) => {
            userDB.findOne({ id: member.id }, (error: any, result: any) => {
              if (error) {
                console.log(error);
              } else if (!result) {
                console.log("No user found");
              } else {
                const options = {
                  body:
                    "Hi " +
                    result.name +
                    ", Pesto " +
                    appointment.eventType +
                    "Event will start on" +
                    appointment.eventStart +
                    "Kindly Attend Without Fail",
                  messagingServiceSid: MSG_ID,
                  to: COUNTRY_CODE + result.phone,
                };
                // Send the message!
                client.messages.create(options, function (err, response) {
                  if (err) {
                    // Just log it for now
                    console.error(err);
                  } else {
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
