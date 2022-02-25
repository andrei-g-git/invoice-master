import * as actionTypes from "./actionTypes";

function abridgedInvoicesLoaded(invoices){
    return{
        type: actionTypes.ABRIDGED_INVOICES_LOADED,
        payload: invoices
    }
}

function invoicesFiltered(filteredInvoices){
    return{
        type: actionTypes.INVOICES_FILTERED,
        payload: filteredInvoices
    }
}

export {
    abridgedInvoicesLoaded,
    invoicesFiltered
}