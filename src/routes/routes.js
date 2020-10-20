const {Router} = require('express');
const router = Router();
const Dialogs = require('../models/Dialogs')
const Message = require('../models/Message')

router.get('/users', async (req, res, next) => {
    const {phone, name} = req.query
    await Dialogs.find({nameUser: name, numberPhone: phone}, function (err, users) {
        if (err) return res.json({success: false, error: err});
        return res.status(200).json({success: true, data: users})
    }).exec()
})
router.get('/chats', async (req, res, next) => {
    //Get All Dialogs
    await Dialogs.find({}).exec((err, dialogs) => {
        if (err) return res.json({success: false, error: err});
        return res.status(200).json({data: dialogs})
    })
})
router.post('/chat/user', async (req, res, next) => {
    try {
        const {nameUser, img, numberPhone} = req.body
        const user = new Dialogs({
            nameUser: nameUser,
            img: img,
            numberPhone: numberPhone
        })
        await user.save((err, created) => {
            if (err) return res.status(400).json({success: false, error: err});
            return res.status(200).json({success: true, data: created})
        });
    } catch (err) {
        return res.status(400).json({success: false, error: err});
    }
})

router.post('/chats/chat/:chatId', async (req, res, next) => {
    try {
        const {date, textMessage} = req.body
        const message = new Message({
            text: textMessage,
            date: date,
            deliveredMessage: true,
            readMessage: false
        })
        await message.save((err, created) =>{
            if (err) return res.status(400).json({ error: err});
            return res.status(200).json({data: created})

        })
    } catch (err) {
        return res.status(400).json({success: false, error: err});
    }
})

module.exports = router
