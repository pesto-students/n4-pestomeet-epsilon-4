import userDB from "../schema/user-schema";
import { message } from "../../utils/response-format";
import profileImgUpload from "../../utils/s3-avatar";
const AvatarController = (request, response) => {
    const id = request.params.id;
    profileImgUpload(request, response, (error) => {
        if (error) {
            response.json({ error: error });
        }
        else {
            // If File not found
            if (request.file === undefined) {
                response.json("Error: No File Selected");
            }
            else {
                const imageName = request.file;
                let editUser = { avatar: imageName.location };
                console.log(id);
                userDB.findOneAndUpdate({ id: id }, { $set: editUser }, { useFindAndModify: false, new: true }, (errors, doc) => {
                    if (errors) {
                        response.json(message("Upload Failed ! Please Try Again", null, false));
                    }
                    else if (!doc) {
                        response.json(message("Couldn't Find the user", null, false));
                    }
                    else {
                        response.json(message("Profile Picture Successfully", null, true));
                    }
                });
            }
        }
    });
};
export default AvatarController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2NvbnRyb2xsZXIvYXZhdGFyLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sdUJBQXVCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sZ0JBQWdCLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUN2RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUU3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDNUMsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLG9CQUFvQjtZQUNwQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDL0IsSUFBSSxRQUFRLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQixNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNWLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUNsQixFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQ3RDLENBQUMsTUFBVyxFQUFFLEdBQVEsRUFBRSxFQUFFO29CQUN4QixJQUFJLE1BQU0sRUFBRTt3QkFDVixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3pELENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDL0Q7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUNwRCxDQUFDO3FCQUNIO2dCQUNILENBQUMsQ0FDRixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSxnQkFBZ0IsQ0FBQyJ9