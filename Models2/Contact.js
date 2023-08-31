const mongoose = require('mongoose')
//to make a model we need 2 things: schema and collection

//1 the schema we make it with mongoose and prepare the caracteristic of our model
const contactSchema = mongoose.Schema({
    name : String,
    age : Number,
    email : {type : String, required : true, unique : true}
})

//2 the collection is 'moncontact' (you can named anything)
module.exports = mongoose.model('moncontact',contactSchema)