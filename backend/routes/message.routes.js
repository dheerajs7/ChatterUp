import express from "express"
import { isAuthenticate } from "../middleware/verifyToken.js"
import { sendMessage } from "../controllers/message.controller.js"

const messageRouter =express.Router()

messageRouter.route("/send/:id").post(isAuthenticate,sendMessage)
messageRouter.route(":id").get(isAuthenticate,sendMessage)


export {messageRouter}