import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_USER_MODEL } from "../../utils/app-constants";

interface IUser {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: Number;
  password: string;
  role: String;
  experience: Number;
  approval: String;
  lastupdateTime: { type: Date };
  createTime: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  id: { type: String, required: true, default: () => uuidv4() },
  name: { type: String, required: true },
  avatar: { type: String },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  experience: { type: String, required: true },
  approval: { type: String, required: true },
  lastupdateTime: { type: Date, default: Date.now },
  createTime: { type: Date },
});

const userModel = mongoose.model(DB_USER_MODEL, userSchema);
export default userModel;
