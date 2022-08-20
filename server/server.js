const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000
const cors = require('cors')
const apiRoute = require('./routes/api')
app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname,'..','build')))
app.use('/',apiRoute)


app.listen(process.env.PORT||PORT,()=>{
    console.log('sever started on port ',PORT)
})