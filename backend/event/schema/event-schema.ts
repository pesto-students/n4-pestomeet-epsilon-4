import { AnyARecord } from "dns";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_EVENT_MODEL, DB_USER_MODEL } from "../../utils/app-constants";

export interface IEvent {
  eventId: string;
  eventName: string;
  eventDescription: string;
  eventType: string;
  eventStart: Date;
  eventEnd: Date;
  eventColor: String;
  organiserId: String;
  resourceCount: Number;
  attendees: Array<Object>;
  hasAssignment: Boolean;
  hasBooked: Boolean;
  lastupdateTime: Date;
  createTime: Date;
}

export const eventSchema: any = new mongoose.Schema<IEvent>(
  {
    eventId: { type: String, required: true, default: () => uuidv4() },
    eventName: { type: String, required: true },
    eventDescription: { type: String },
    eventType: { type: String, required: true },
    eventStart: { type: String, required: true },
    eventEnd: { type: String, required: true },
    eventColor: { type: String, required: true },
    organiserId: { type: String, required: true },
    attendees: {
      type: Array,
      required: function isSlot(this: typeof eventSchema) {
        return this.eventType != "slot";
      },
    },
    hasBooked: { type: Boolean, default: false },
    resourceCount: { type: Number, default: 0 },
    hasAssignment: {
      type: Boolean,
      required: function isSlot(this: typeof eventSchema) {
        return this.eventType != "slot";
      },
    },
    lastupdateTime: { type: Date, default: Date.now },
    createTime: { type: Date },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

eventSchema.virtual("organiserDetail", {
  ref: DB_USER_MODEL,
  localField: "organiserId",
  foreignField: "id",
  justOne: true,
});

function isSlot(this: typeof eventSchema) {}

const eventModel = mongoose.model(DB_EVENT_MODEL, eventSchema);
export default eventModel;
