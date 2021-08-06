import batchDB from "../schema/batch-schema";
import { message } from "../../utils/response-format";
const ListbatchController = (request, response) => {
    const batchType = request.params.type;
    batchDB.find({ batchType: batchType }, (errors, result) => {
        if (!errors) {
            if (result.length == 0) {
                response.json(message("No " + String(batchType) + " Batch found", null, false));
            }
            else {
                response.json(message(String(result.length) + " " + String(batchType) + " Batches Found", result, true));
            }
        }
        else {
            response.json(message("Error while reteriving team", errors, false));
        }
    });
};
export default ListbatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJhdGNoLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYXRjaC9jb250cm9sbGVyL2xpc3RiYXRjaC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDbEUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDakUsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxnQkFBZ0IsRUFDbEUsTUFBTSxFQUNOLElBQUksQ0FDTCxDQUNGLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSxtQkFBbUIsQ0FBQyJ9