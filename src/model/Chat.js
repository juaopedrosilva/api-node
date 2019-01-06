const mongoose = require('../database') 

// Cada Convesar vai tem seu  conjunto de messagens
const ChatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})
const Chat = mongoose.model('Chat', ChatSchema) 
module.exports = Chat