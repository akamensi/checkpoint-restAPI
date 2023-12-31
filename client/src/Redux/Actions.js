import { GETCONTACTS, GETONECONTACT } from "./TypeActions"
import axios from 'axios'


export const getContacts=()=>async(dispatch)=>{
    try {
    const res = await axios.get('/api/contact/getContact')
    
    dispatch(
        {
            type : GETCONTACTS,
            payload : res.data.contactList

        }
    )
} catch (error) {
    console.log(error)
}
}

export const addContact=(payload,navigate)=>async(dispatch)=>{
try {
    await axios.post('/api/contact/addContact',payload)
    dispatch(getContacts())
    
    navigate('/ListContact')
} catch (error) {
    console.log(error)
}
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
    const res = await axios.get(`/api/contact/getOneContact/${id}`)
    dispatch(
        {
            type:GETONECONTACT,
            payload:res.data.oneContact
        }
    )
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(payload,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,payload)

        dispatch(getContacts())

        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
try {
    await axios.delete(`/api/contact/deleteContact/${id}`)
    dispatch(getContacts())
} catch (error) {
    console.log(error)
}
}