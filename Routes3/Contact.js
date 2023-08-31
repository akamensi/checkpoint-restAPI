const express = require('express')
const Contact = require('../Models2/Contact')
const { addContact, getContact, deleteContat, upContact, getOneContact } = require('../Controlles4/Contact')

const contactRouter = express.Router()//create our mini router 


contactRouter.post('/addContact',addContact)


contactRouter.get('/getContact',getContact)


contactRouter.delete('/deleteContact/:id',deleteContat)


contactRouter.put('/updateContact/:id',upContact)


contactRouter.get('/getOneContact/:id',getOneContact)


module.exports = contactRouter