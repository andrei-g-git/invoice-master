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

function editorToggled(isOpen){
    return{
        type: actionTypes.EDITOR_TOGGLED,
        payload: isOpen
    }
}

export {
    abridgedInvoicesLoaded,
    invoicesFiltered,
    editorToggled
}