const {Schema, model} = require('mongoose')

const DialogsListSchema = new Schema({
    nameUser:{type:String},
    img:{type:String},
    numberPhone:{type: Number}
    // dataLastMessage:{
    //     type:Object,
    //     date: {type: Date},
    //     textMessage:{type:String}
    // },
})

module.exports = model('Dialogs', DialogsListSchema)
