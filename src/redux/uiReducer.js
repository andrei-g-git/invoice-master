import {
    EDITOR_TOGGLED
} from "./actionTypes";

const initialState = {
    editorOpen: false
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case EDITOR_TOGGLED:
            return{
                ...state,
                editorOpen: action.payload
            }
        default:
            return state;
    }
}