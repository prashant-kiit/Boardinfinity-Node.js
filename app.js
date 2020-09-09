const express = require('express')
const mongoose = require('mongoose')
const connection = require('./DB/connection')
const port = process.env.PORT || 9000 ;
const app = express()

connection();
/*mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
}) */

app.use(express.json())

const apiRouter = require('./routes/api')
app.use('/api',apiRouter)

app.listen(port, () => {
    console.log('Server started ..')
})

