import { Conversastion } from "../models/conversation.model.js"
import { Message } from "../models/message.model.js"
import { getRecieverSocketId, io } from "../socket/socket.js"

const sendMessage = async(req,res)=>{
    try {
        const {message} =req.body
        const {id:recieverId} = req.params
        const senderId = req.user.id 
        
        let conversation = await Conversastion.findOne({
            participants:{$all :[senderId,recieverId]}
        })

        if(!conversation){
            conversation = await Conversastion.create({
                participants: [senderId,recieverId],
            })
        }

        const newMessage = new Message({
             senderId,
             recieverId,
             message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(),newMessage.save()])

        //Socket io Functionality

        const recieverSocketId = getRecieverSocketId(recieverId)

        if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)

    } catch (error) {
        next(error)
    }
}

const getMessage = async(req,res, next)=>{
    try {
        const {id:userToMessage} = req.params;
        const senderId = req.user.id;

        const conversation = await Conversastion.findOne({
            participants:{ $all:[senderId ,userToMessage]},
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }
       
        const messages = conversation.messages;
        return res.status(200).json(messages)

    } catch (error) {
        next(error)
    }
}

export {sendMessage,getMessage }