import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import {
  DB_USER_MODEL,
  DB_TEAM_MODEL,
  DB_BATCH_MODEL,
} from "../../utils/app-constants";
import dotenv from "dotenv";
dotenv.config();

interface ITeam {
  teamId: string;
  teamName: string;
  teamType: string;
  batchId: string;
  batchOwnerID: string;
  mentorId: string;
  teamMembers: Array<Object>;
  lastupdateTime: { type: Date };
  createTime: Date;
}

const teamSchema = new mongoose.Schema<ITeam>(
  {
    teamId: { type: String, required: true, default: () => uuidv4() },
    teamName: { type: String, required: true },
    teamType: { type: String, required: true },
    batchId: { type: String, required: true, ref: DB_BATCH_MODEL },
    batchOwnerID: { type: String, required: true },
    mentorId: { type: String, required: true },
    teamMembers: { type: Array, required: true },
    lastupdateTime: { type: Date, default: Date.now },
    createTime: { type: Date },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

teamSchema.virtual("batchDetail", {
  ref: DB_BATCH_MODEL,
  localField: "batchId",
  foreignField: "batchId",
  justOne: true,
});

teamSchema.virtual("mentorDetail", {
  ref: DB_USER_MODEL,
  localField: "mentorId",
  foreignField: "id",
  justOne: true,
});

const teamModel = mongoose.model(DB_TEAM_MODEL, teamSchema);
export default teamModel;
