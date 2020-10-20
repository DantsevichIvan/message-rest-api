const {Schema, model} = require('mongoose')

const DialogsListSchema = new Schema({
    nameUser:{type:String},
    img:{type:String},
    numberPhone:{type: Number}
})

module.exports = model('Dialogs', DialogsListSchema)
