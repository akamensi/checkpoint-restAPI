import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addContact } from "../Redux/Actions";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"

const AddContact=()=>{

const[name, setName]= useState('')
const [email , setEmail] =useState('');
const [age, setAge]=useState(0)

const dispatch = useDispatch()
const navigate = useNavigate()
const handelAdd=(e)=>{
    e.preventDefault()
    dispatch(addContact({name,age,email},navigate))
}

    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Age" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button onClick={(e)=>handelAdd(e)} variant="primary" type="submit">Add Contact</Button>
    </Form>
    )
}

export default AddContact