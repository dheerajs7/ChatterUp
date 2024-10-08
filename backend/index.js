import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import { messageRouter } from './routes/message.routes.js';
import { friendRouter} from './routes/friends.routes.js';
import { server,app } from './socket/socket.js';
dotenv.config()


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB Atlas")
}).catch((err)=>{
    console.log(err);
    
})


// const app =express();
const port = 3000;

app.use(express.json())
app.use(cookieParser())

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

app.use('/api',userRouter)
app.use('/api',messageRouter)
app.use('/api',friendRouter)

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500
    const message =err.message ||"Internal server error"

    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})