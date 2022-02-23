import * as actionTypes from "./actionTypes";

const initialState = {
    abridgedInvoices: []
}

function dataReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.ABRIDGED_INVOICES_LOADED:
            return {
                ...state,
                abridgedInvoices: action.payload
            }
        default:
            return state;
    }
}

export {
    dataReducer
}