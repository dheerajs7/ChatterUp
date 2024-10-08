import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
        },
    password:{
            type:String,
            required:true
        },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }   
},
{timestamps:true}
)
// QJ13vUkpo1SkBHj2
export const User = mongoose.model("User",userSchema)