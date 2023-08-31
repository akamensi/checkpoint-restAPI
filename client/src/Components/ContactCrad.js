import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../Redux/Actions';

const ContactCrad=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
        <Card style={{ width: '18rem' }}>
    
    <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Title>{el.age}</Card.Title>
        <Card.Title>{el.email}</Card.Title>
        <Button onClick={()=>dispatch(deleteContact(el._id))} variant="danger">Delete</Button>
        <Button variant="info" as={Link} to={`/EditContact/${el._id}`}>Edit</Button>
    </Card.Body>
    </Card>
        </div>
    )
}

export default ContactCrad