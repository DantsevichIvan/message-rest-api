const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const mongoUrl = require('./config/dev').mongo_url
const app = express()
const PORT = process.env.PORT || 4000


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(require('./routes/routes'))

if (process.env.NOdE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

const start = async function () {
    try {
        await mongoose.connect(mongoUrl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        app.listen(PORT, () => console.log(`server listen on PORT ${PORT}`))

    } catch (e) {
        console.log(`Error` + e)
        console.log('Error Start Server')
        process.exit(1)
    }
}

module.exports = {
    app,
    start
}

