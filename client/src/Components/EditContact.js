import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneContact, updateContact } from '../Redux/Actions';

const EditContact=()=>{
    const {id}= useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneContact(id))
    },[])

const onecontact = useSelector(state => state.onecontact)
const [name, setName] = useState(onecontact.name)
const [age, setAge] = useState(onecontact.age)
const [email , setEmail] = useState(onecontact.email);


useEffect(()=>{
    setName(onecontact.name)
    setAge(onecontact.age)
    setEmail(onecontact.email)
},[onecontact])
const navigate = useNavigate()
const handleUpdate=(e)=>{
    e.preventDefault()
    dispatch(updateContact({name,age,email},id,navigate))
}
    return(
        <div>
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Age" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">Add Contact</Button>
    </Form>
        </div>
    )
}

export default EditContact