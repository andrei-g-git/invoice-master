import * as actionTypes from "./actionTypes";

function abridgedInvoicesLoaded(invoices){
    return{
        type: actionTypes.ABRIDGED_INVOICES_LOADED,
        payload: invoices
    }
}

export {
    abridgedInvoicesLoaded
}