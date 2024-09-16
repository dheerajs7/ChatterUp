import express from 'express'
import { isAuthenticate } from '../middleware/verifyToken.js'
import { getFriends } from '../controllers/friends.controller.js'


const friendRouter = express.Router()


friendRouter.route("/").get(isAuthenticate,getFriends)


export{friendRouter}

