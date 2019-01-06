const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

const Chat = require('../model/Chat')
 
router.use(authMiddleware)

router.post('/', async (req, res) => { 
    try {
        const chat = await Chat.create({ ...req.body, user: req.createdBy})
        return res.send({ chat })
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new chat'})
     }
})
 
module.exports = app => app.use('/chat', router)