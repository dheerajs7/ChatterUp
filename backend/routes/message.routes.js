import express from "express"
import { isAuthenticate } from "../middleware/verifyToken.js"
import { getMessage, sendMessage } from "../controllers/message.controller.js"

const messageRouter =express.Router()

messageRouter.route("/send/:id").post(isAuthenticate,sendMessage)
messageRouter.route("/:id").get(isAuthenticate,getMessage)


export {messageRouter}