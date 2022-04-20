import {
    EDITOR_TOGGLED,
    EDITED_AT_INDEX,
    NAME_CHANGED,
    AMOUNT_CHANGED,
    STATUS_CHANGED,
    COUNTRY_CHANGED,
    CITY_CHANGED,
    PHONE_CHANGED
} from "./actionTypes";

const initialState = {
    editorOpen: false,
    noteToEdit: 0,
    edit: {
        name: "",
        amount: "",
        status: "",
        country: "",
        city: "",
        phone: ""
    }
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case EDITOR_TOGGLED:
            return{
                ...state,
                editorOpen: action.payload
            }
        case EDITED_AT_INDEX:
            return{
                ...state,
                noteToEdit: action.payload
            }
        case NAME_CHANGED:
            return{
                ...state, 
                edit: {
                    ...state.edit,
                    name: action.payload
                }
            }
        case AMOUNT_CHANGED:
            return{
                ...state, 
                edit: {
                    ...state.edit,
                    amount: action.payload
                }
            }
        case STATUS_CHANGED:
            return{
                ...state, 
                edit: {
                    ...state.edit,
                    status: action.payload
                }
            }    
        case COUNTRY_CHANGED:
            return{
                ...state, 
                edit: {
                    ...state.edit,
                    country: action.payload
                }
            }  
        case CITY_CHANGED:
            return{
                ...state, 
                edit: {
                    ...state.edit,
                    city: action.payload
                }
            }    
        case PHONE_CHANGED:
            return{
                ...state, 
                edit: {
                    ...state.edit,
                    phone: action.payload
                }
            }                                                            
        default:
            return state;
    }
}