import {
    ANONYMOUS_FINANCES_LOADED
} from "./actionTypes";

const initialState = {
    anonymousPayments: [

    ]
}

function statsReducer(state = initialState, action){
    switch(action.type){
        case ANONYMOUS_FINANCES_LOADED:
            return {
                ...state,
                anonymousPayments: action.payload
            }
        default:
            return state;
    }
}

export {
    statsReducer
}