import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import scheduler from './notification/scheduler';
import registerRouter from "./authentication/routes/register-route";
import loginRouter from "./authentication/routes/login-route";
import edituserRouter from "./user/routes/edituser-route";
import listuserRouter from "./user/routes/listuser-route";
import listalluserRouter from "./user/routes/listalluser-route";
import deleteuserRouter from "./user/routes/deleteuser-route";
import createteamRouter from "./team/routes/createteam-route";
import editteamRouter from "./team/routes/editteam-route";
import listteamRouter from "./team/routes/listteam-route";
import listmyteamRouter from "./team/routes/listmyteam-route";
import deleteteamRouter from "./team/routes/deleteteam-route";
import listbatchRouter from "./batch/routes/listbatch-route";
import listmybatchRouter from "./batch/routes/listmybatch-route";
import createbatchRouter from "./batch/routes/createbatch-route";
import editbatchRouter from "./batch/routes/editbatch-route";
import deletebatchRouter from "./batch/routes/deletebatch-route";
import avataruploadRouter from "./user/routes/avatar-route";
import createresourceRouter from "./resource/routes/createresource-route";
import deleteresourceRouter from "./resource/routes/deleteresource-route";
import listresourceRouter from "./resource/routes/listresource-route";
import createeventRouter from "./event/routes/createevent-route";
import listmyeventRouter from "./event/routes/listmyevent-route";
import listeventRouter from "./event/routes/listevent-route";
import editeventRouter from "./event/routes/editevent-route";
import deleteeventRouter from "./event/routes/deleteevent-route";
import bookeventRouter from "./event/routes/bookevent-route";
import createassignmentRouter from "./assignment/routes/createassignment-route";
import listassignmentRouter from "./assignment/routes/listassignment-route";
import deleteassignmentRouter from "./assignment/routes/deleteassignment-route";
import createannouncementRouter from "./announcement/routes/createannouncement-route";
import listannouncementRouter from "./announcement/routes/listannouncement-route";
import deleteannouncementRouter from "./announcement/routes/deleteannouncement-route";
import listStudents from "./user/routes/liststudents-route";
import countmyassetsRouter from "./user/routes/countmyassets-route";
import Authentication from "./utils/check-token";

/* This is the entry point of the back-end where Database Connection, Server Establishment,
 API Route Path  and Authentication middleware are configured */


const app = express();
var allowCrossDomain = {
  Origin: "*",
  method: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors(allowCrossDomain));

const uri =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  "@" +
  process.env.DB_HOST +
  "/" +
  process.env.DB_NAME;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to DB."))
  .catch((error) => console.log(error));

app.use("/api/pesto/register", registerRouter);
app.use("/api/pesto/login", loginRouter);

app.use(Authentication);

/*Admin Screen Routers */
app.use("/api/pesto/list/user", listuserRouter);
app.use("/api/pesto/list/user/all", listalluserRouter);
app.use("/api/pesto/list/students", listStudents);
app.use("/api/pesto/edit/user", edituserRouter);
app.use("/api/pesto/delete/user", deleteuserRouter);
app.use("/api/pesto/list/team", listteamRouter);
app.use("/api/pesto/list/myteam", listmyteamRouter);
app.use("/api/pesto/create/team", createteamRouter);
app.use("/api/pesto/edit/team", editteamRouter);
app.use("/api/pesto/delete/team", deleteteamRouter);
app.use("/api/pesto/list/batch", listbatchRouter);
app.use("/api/pesto/list/mybatch", listmybatchRouter);
app.use("/api/pesto/create/batch", createbatchRouter);
app.use("/api/pesto/edit/batch", editbatchRouter);
app.use("/api/pesto/delete/batch", deletebatchRouter);

/*Resource Upload Routers*/
app.use("/api/pesto/avatar/upload", avataruploadRouter);
app.use("/api/pesto/resource/upload", createresourceRouter);
app.use("/api/pesto/resource/delete", deleteresourceRouter);
app.use("/api/pesto/resource/list", listresourceRouter);

/*Event Routers*/
app.use("/api/pesto/create/event", createeventRouter);
app.use("/api/pesto/list/event", listeventRouter);
app.use("/api/pesto/edit/event", editeventRouter);
app.use("/api/pesto/list/myevent", listmyeventRouter);
app.use("/api/pesto/delete/event", deleteeventRouter);
app.use("/api/pesto/book/event", bookeventRouter);

/* Assigment Routers */
app.use("/api/pesto/create/assignment", createassignmentRouter);
app.use("/api/pesto/list/assignment", listassignmentRouter);
app.use("/api/pesto/delete/assignment", deleteassignmentRouter);

/* Announcement Routers */
app.use("/api/pesto/create/announcement", createannouncementRouter);
app.use("/api/pesto/list/announcement", listannouncementRouter);
app.use("/api/pesto/delete/announcement", deleteannouncementRouter);

/* Count Routers */
app.use("/api/pesto/count/myassets", countmyassetsRouter);

scheduler.start();

const serverListen = app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started Successfully");
});
