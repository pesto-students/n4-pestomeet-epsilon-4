import express from "express";
import deleteController from "../controller/deleteuser-controller";
const deleteRouter = express.Router();
deleteRouter.delete("/:id", deleteController);
export default deleteRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRldXNlci1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIvcm91dGVzL2RlbGV0ZXVzZXItcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sZ0JBQWdCLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFOUMsZUFBZSxZQUFZLENBQUMifQ==