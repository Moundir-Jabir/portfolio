require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}).then(() => console.log('database connected'))
  .catch((e) => console.log('not connect to database', e))

//Routers
const authRouter = require('./routes/auth')

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/auth', authRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})