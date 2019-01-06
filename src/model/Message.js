const mongoose = require('../database') 

// Cada Convesar vai tem seu  conjunto de messagens
const MessageSchema = new mongoose.Schema({
    MessageId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    }],
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
})
const Message = mongoose.model('Message', MessageSchema) 
module.exports = Message