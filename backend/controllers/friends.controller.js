import { User } from "../models/user.model.js";

const getFriends =async(req,res,next)=>{
    try {
        const loggedInUserId = req.user.id;


        const friends = await User.find({
            _id:{$ne:loggedInUserId}
        }).select("-password")

        if (!friends) {
            res.status(401).json({message:"not available"})
        }
        
        

        res.status(200).json(friends)
    } catch (error) {
        next(error)
    }
}

export{getFriends}