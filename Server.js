const express = require('express')
const ConnectDB = require('./Config1/ConnectDB')
const contactRouter = require('./Routes3/Contact')

const app = express()

const port = 5000 

ConnectDB()// connect of the DB with the server

app.use(express.json())// united the language

app.use('/api/contact',contactRouter)// we give the app to the contatcRouter so we can create our mini routers and the the api for contact

app.listen(port,console.log(`Server is runnig on the port ${port}`))