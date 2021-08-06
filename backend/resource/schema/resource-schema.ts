import mongoose from "mongoose";
import {
  DB_RESOURCE_MODEL,
  DB_USER_MODEL,
  DB_EVENT_MODEL,
} from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";

interface IResource {
  resourceId: string;
  resourceName: string;
  uploaderId: string;
  eventId: string;
  resource: string;
  resourceLinks: Array<String>;
  resourceKey: string;
  lastupdateTime: Date;
  createTime: Date;
}

const resourceSchema = new mongoose.Schema<IResource>(
  {
    resourceId: { type: String, required: true, default: () => uuidv4() },
    resourceName: { type: String, required: true },
    uploaderId: { type: String, required: true },
    eventId: { type: String, required: true },
    resource: { type: String, required: true },
    resourceLinks: { type: Array },
    resourceKey: { type: String, required: true },
    lastupdateTime: { type: Date, default: Date.now },
    createTime: { type: Date },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

resourceSchema.virtual("eventDetail", {
  ref: DB_EVENT_MODEL,
  localField: "eventId",
  foreignField: "eventId",
  justOne: true,
});

resourceSchema.virtual("uploaderDetail", {
  ref: DB_USER_MODEL,
  localField: "uploaderId",
  foreignField: "id",
  justOne: true,
});

const resourceModel = mongoose.model(DB_RESOURCE_MODEL, resourceSchema);
export default resourceModel;
