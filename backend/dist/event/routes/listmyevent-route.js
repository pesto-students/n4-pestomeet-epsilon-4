import express from "express";
import listmyeventController from "../controller/listmyevent-controller";
const listmyeventRouter = express.Router();
listmyeventRouter.get("/:userID", listmyeventController);
export default listmyeventRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15ZXZlbnQtcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ldmVudC9yb3V0ZXMvbGlzdG15ZXZlbnQtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8scUJBQXFCLE1BQU0sc0NBQXNDLENBQUM7QUFHekUsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDM0MsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELGVBQWUsaUJBQWlCLENBQUMifQ==