import * as actionTypes from "./actionTypes";

const initialState = {
    abridgedInvoices: [],
    filteredInvoices: []
}

function dataReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.ABRIDGED_INVOICES_LOADED:
            return {
                ...state,
                abridgedInvoices: action.payload
            }
        case actionTypes.INVOICES_FILTERED:
            return {
                ...state,
                filteredInvoices: action.payload
            }
        default:
            return state;
    }
}

export {
    dataReducer
}