import express from "express";
import { check } from "express-validator";
import editbatchController from "../controller/editbatch-controller";
const editbatchRouter = express.Router();
console.log("in router");
editbatchRouter.patch("/:id", check("batchName", "teamName is required").not().isEmpty(), check("batchOwner").not().isEmpty(), check("batchMembers").not().isEmpty(), editbatchController);
export default editbatchRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGJhdGNoLXJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmF0Y2gvcm91dGVzL2VkaXRiYXRjaC1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFRLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sbUJBQW1CLE1BQU0sb0NBQW9DLENBQUM7QUFFckUsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekIsZUFBZSxDQUFDLEtBQUssQ0FDbkIsTUFBTSxFQUNOLEtBQUssQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDMUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUNuQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQ3JDLG1CQUFtQixDQUNwQixDQUFDO0FBRUYsZUFBZSxlQUFlLENBQUMifQ==