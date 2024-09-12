import express from 'express'
import { isAuthenticate } from '../middleware/verifyToken.js'
import { getFriends } from '../controllers/friends.controller.js'


const router = express.Router()


router.route("/friends").get(isAuthenticate,getFriends)


export{router}

