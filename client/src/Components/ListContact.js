import { useEffect } from "react"
import { getContacts } from "../Redux/Actions"
import {useDispatch, useSelector} from "react-redux"
import ContactCrad from "./ContactCrad"

const ListContact=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getContacts())
    },[])

    const contacts = useSelector(state=>state.contacts)

    return(
        <div>
            {
                contacts.map(el=> <ContactCrad el={el}/>)
            }
        </div>
    )
}


export default ListContact