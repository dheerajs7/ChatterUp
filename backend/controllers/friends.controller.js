import { User } from "../models/user.model.js";

const getFriends =async(req,res,next)=>{
    try {
        const loggedInUserId = req.user.id;

        const friends = await User.find({
            id:{$ne:loggedInUserId}
        }).select("password")

        res.status(200).json(friends)
    } catch (error) {
        next(error)
    }
}

export{getFriends}