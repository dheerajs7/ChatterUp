import { ApiError } from "../utils/ApiError.js"
import jwt from "jsonwebtoken"

const isAuthenticate = async(req,res,next)=>{
    try {
        const token = req.cookies.access_token

        if(!token){
            return next(ApiError(401,"Unauthorized"))
        }

        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                return next(ApiError(403,"Forbidden"))
        }
        req.user =user

        next()
    })
    } catch (error) {
        next(error)
    }
}

export {isAuthenticate}