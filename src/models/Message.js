const {Schema, model} = require('mongoose')

const MessageSchema = new Schema({
    text: {type: String},
    date: {type: Date},
    deliveredMessage: {type: Boolean},
    readMessage: {type: Boolean}
})

module.exports = model('Message', MessageSchema)
