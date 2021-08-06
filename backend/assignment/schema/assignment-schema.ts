import mongoose from "mongoose";
import { DB_ASSIGNMENT_MODEL, DB_USER_MODEL } from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";

interface IAssignment {
  assignmentId: string;
  assignmentName: string;
  uploaderId: string;
  eventID: string;
  assignmentLinks: Array<String>;
  lastupdateTime: Date;
  createTime: Date;
}

const assignmentSchema = new mongoose.Schema<IAssignment>(
  {
    assignmentId: { type: String, required: true, default: () => uuidv4() },
    assignmentName: { type: String, required: true },
    uploaderId: { type: String, required: true },
    eventID: { type: String, required: true },
    assignmentLinks: { type: Array, require: true },
    lastupdateTime: { type: Date, default: Date.now },
    createTime: { type: Date },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

assignmentSchema.virtual("uploaderDetail", {
  ref: DB_USER_MODEL,
  localField: "uploaderId",
  foreignField: "id",
  justOne: true,
});

const assignmentModel = mongoose.model(DB_ASSIGNMENT_MODEL, assignmentSchema);
export default assignmentModel;
