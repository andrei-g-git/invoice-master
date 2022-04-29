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
// function confirmingDelete(isOpen){
//     return{
//         type: actionTypes.CONFIRMING_DELETE,
//         payload: isOpen
//     }
// }
function openingDeleteConfirmation(isOpen){
    return{
        type: actionTypes.OPENING_DELETE_CONFIRMATION,
        payload: isOpen
    }
}

function anonymousFinancesLoaded(data){
    return{
        type: actionTypes.ANONYMOUS_FINANCES_LOADED,
        payload: data
    }
}

function openingNavMenu(isOpen){
    return{
        type: actionTypes.OPENING_NAV_MENU,
        payload: isOpen
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
    phoneChanged,
    //confirmingDelete
    openingDeleteConfirmation,
    anonymousFinancesLoaded,
    openingNavMenu
}