import React from 'react';
import { connect } from 'react-redux';
import { 
    editorToggled,
    nameChanged,
    amountChanged,
    statusChanged,
    countryChanged,
    cityChanged,
    phoneChanged 
} from '../redux/actions';
import "../css/InvoiceEdit.scss";

const $ = require("jquery");

export const InvoiceEdit = (props) => {
  return (
    <div className="edit-form-container">     
        <form className="edit-form"
            data-testid="edit-form"
            onSubmit={curryHandleSubmit(props)}
        >
            <label htmlFor="name-field">Customer name</label>
            <input className="" id="name-field"
                type="text"
                onChange={(event) => props.handleNameChange(event)}
            />

            <label htmlFor="amount-field">Transaction amount</label>
            <input className="" id="amount-field"
                type="text"
                onChange={(event) => props.handleAmountChange(event)}
            />

            <label htmlFor="status-field">Transaction status</label>
            <input className="" id="status-field"
                type="text"
                onChange={(event) => props.handleStatusChange(event)}
            />

            <label htmlFor="country-field">Country of origin</label>
            <input className="" id="country-field"
                type="text"
                onChange={(event) => props.handleCountryChange(event)}
            />

            <label htmlFor="city-field">City of residence</label>
            <input className="" id="city-field"
                type="text"
                onChange={(event) => props.handleCityChange(event)}
            />

            <label htmlFor="phone-field">Phone number</label>
            <input className="" id="phone-field"
                type="text"
                onChange={(event) => props.handlePhoneChange(event)}
            />

            <input className=""
                type="submit"  //--- apparently "submit" disconnects the form if btn has click event
                value="File Invoice"
            />

            
        </form>
    </div>
  )
}

const curryHandleSubmit = (props) => {
    return function(event) {

        event.preventDefault();

        postInvoice(props, $);
        

        props.toggleEditor(! props.editorOpen);
    }
}

const postInvoice = (props, $) => {
    const changes = props.changes;

    const invoicesLength = props.invoices.length;
    const isNewInvoice = props.index == invoicesLength;

    const newestInvoice = props.invoices[invoicesLength - 1];

    let url = "/api/invoices/add";
    let order = newestInvoice.ORD_NUM + 1;
    if(! isNewInvoice){
        url = "/api/invoices/edit";
        const selectedInvoice = props.invoices[props.index];
        order = selectedInvoice.ORD_NUM;
    }

    const dateObject = new Date();
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1; //starts from 0 
    const day = dateObject.getUTCDate(); //date actually gets the day...
    const date = year + "-" + month + "-" + day;
    console.log(date);

    const requestObject = {
        type: "POST",
        url: url,
        data: { 
            name: changes.name,
            order: order,
            date: date, 
            amount: changes.amount,
            status: changes.status,
            country: changes.country,
            city: changes.city,
            phone: changes.phone
        },
        success: response => {
            console.log(response)
        }        
    };        

    $.ajax(requestObject);

    return requestObject; //for testing
}

const mapStateToProps = (state) => {
	return {
		editorOpen: state.ui.editorOpen,
        changes: state.ui.edit,
        index: state.ui.invoiceToEdit,
        invoices: state.data.abridgedInvoices
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleEditor: (isOpen) => {
			dispatch(editorToggled(isOpen));
		},
        handleNameChange: (event) => {
            dispatch(nameChanged(event.target.value));
        },
        handleAmountChange: (event) => {
            dispatch(amountChanged(event.target.value));
        },
        handleStatusChange: (event) => {
            dispatch(statusChanged(event.target.value));
        },
        handleCountryChange: (event) => {
            dispatch(countryChanged(event.target.value));
        },
        handleCityChange: (event) => {
            dispatch(cityChanged(event.target.value));
        },
        handlePhoneChange: (event) => {
            dispatch(phoneChanged(event.target.value));
        }                                        
	}
}

export {
    postInvoice
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit)