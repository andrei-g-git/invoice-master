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

function editedAtIndex(index){
    return{
        type: actionTypes.EDITED_AT_INDEX,
        payload: index
    }
}

function nameChanged(newValue){
    return{
        type: actionTypes.NAME_CHANGED,
        payload: newValue
    }
}
function amountChanged(newValue){
    return{
        type: actionTypes.AMOUNT_CHANGED,
        payload: newValue
    }
}
function statusChanged(newValue){
    return{
        type: actionTypes.STATUS_CHANGED,
        payload: newValue
    }
}
function countryChanged(newValue){
    return{
        type: actionTypes.COUNTRY_CHANGED,
        payload: newValue
    }
}
function cityChanged(newValue){
    return{
        type: actionTypes.CITY_CHANGED,
        payload: newValue
    }
}
function phoneChanged(newValue){
    return{
        type: actionTypes.PHONE_CHANGED,
        payload: newValue
    }
}
export {
    abridgedInvoicesLoaded,
    invoicesFiltered,
    editorToggled,
    editedAtIndex,
    nameChanged,
    amountChanged,
    statusChanged,
    countryChanged,
    cityChanged,
    phoneChanged
}