import express from "express";
import createassignmentController from "../controller/createassignment-controller";
const createassignmentRouter = express.Router();
createassignmentRouter.post("/", createassignmentController);
export default createassignmentRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYXNzaWdubWVudC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2lnbm1lbnQvcm91dGVzL2NyZWF0ZWFzc2lnbm1lbnQtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFtQixNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLDBCQUEwQixNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE1BQU0sc0JBQXNCLEdBQVcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hELHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUU3RCxlQUFlLHNCQUFzQixDQUFDIn0=