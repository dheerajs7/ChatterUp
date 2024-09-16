import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js";

const signUp =async(req,res,next)=>{
 try{
    const{username,email,password,gender}= req.body;
    
        const isExist=await User.findOne({email})
        if(isExist){
          return next(ApiError(400,"User already exist"))
      }
        if(!username && !email){
        return next(ApiError(400,"Please enter both username and email"))

     } 
     if(password.length<8){
        return next(ApiError(400,"Password must be at least 8 characters"))
     }

     const hashedPassword = await bcrypt.hash(password,10)
     const newUser = new User({
        username,
        email,
        password:hashedPassword,
        gender
     })
    
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)
        await newUser.save()
        res.cookie("access_token",token,{httpOnly:true}).status(201).json({message:"User created successfully",newUser})
     }catch (error) {
        next(error)
        // console.log(error);
        
        // return next(ApiError(400,"Error creating user"))
     }
       
}

const login=async(req,res,next)=>{
    try{
    const{email,password}= req.body;
    const validUser =await User.findOne({email})

    if(!validUser){
        return next(ApiError(404,"User not found"))
    }
     const  validPassword= await bcrypt.compare(password,validUser.password)

     if(!validPassword){
        return next(ApiError(401,"Password not match"))
     }

     const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
     res.cookie("access_token",token,{httpOnly:true}).status(201).json({message:"User Logged in Successfully",validUser})
}catch(err){
next(err)
}
}

const logout =(req,res)=>{
    try {
        res.clearCookie("access_token")

        res.status(200).json({
            message: "User logged out successfully",
        })
    } catch (error) {
        next(error)
    }
}

export {signUp,login,logout}