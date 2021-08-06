import express from "express";
import listStudentController from "../controller/liststudents-controller";
const listStudentRouter = express.Router();
listStudentRouter.get("/:userID", listStudentController);
export default listStudentRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHN0dWRlbnRzLXJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlci9yb3V0ZXMvbGlzdHN0dWRlbnRzLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLHFCQUFxQixNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzNDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUV6RCxlQUFlLGlCQUFpQixDQUFDIn0=