const Contact = require('../Models2/Contact')

exports.addContact=async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})  //we test with the variable found if the email in the req.body.email  exist or not in our Model Contact,
        if(found){                                                     // if found is true we must put return so it can break after that.
            return res.status(400).send('Contact already esxit')       //so it gives us the res.status(400) send the msg and stop execution
        }
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).send({note:'contact added succeflully', newContact}) //.status(200) success
    } catch (error) {
        res.status(500).send('could not add contact')//.status to define the status :(500) error of server
    }
    }


exports.getContact=async(req,res)=>{
    try {
        const contactList = await Contact.find()
        res.status(200).send({note : 'contactList', contactList})
        } catch (error) {
        res.status(500).send('could not get the contact')
        }
        }


exports.deleteContat=async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).send({note: 'contact deleted successfully'})
    } catch (error) {
        res.status(500).send('could not deleted')
    }
}


exports.upContact=async(req,res)=>{
    try {
        const {id} = req.params
        const contactUp = await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(500).send({note : 'contact is updated', contactUp})
    } catch (error) {
        res.status(500).send('could not updated')
    }
}

exports.getOneContact=async(req,res)=>{
    try {
        const {id} = req.params
        const oneContact = await Contact.findById(id)
        res.status(200).send({note: 'contact exist', oneContact })
    } catch (error) {
        res.status(500).send("contact don't exist")
    }
}