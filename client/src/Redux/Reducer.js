import { GETCONTACTS, GETONECONTACT } from "./TypeActions"

const initialState = {
    contacts : [],
    onecontact: {}
}

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case GETCONTACTS :return {...state,contacts : action.payload }
        case GETONECONTACT : return{...state,onecontact: action.payload}
        default: return state
        
    }
}

export default Reducer