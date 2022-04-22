import React from 'react';
import { connect } from 'react-redux';
import SubmitForm from './SubmitForm';
import { 
    editorToggled,
    nameChanged,
    amountChanged,
    statusChanged,
    countryChanged,
    cityChanged,
    phoneChanged 
} from '../redux/actions';
import {
    postInvoice,
    createRequestObject,
    getSimpleDate
} from "../js/invoiceEdit";
import "../css/InvoiceEdit.scss";

const $ = require("jquery");

export const InvoiceEdit = (props) => {
  return (
    <div className="edit-form-container">     
        <form className="edit-form"
            data-testid="edit-form"
            onSubmit={curryHandleSubmit(props)}
        >
            <div className="input-group">
                <label htmlFor="name-field">Customer name</label>
                <input className="" id="name-field"
                    type="text"
                    onChange={(event) => props.handleNameChange(event)}
                />
            </div>


            <div className="input-group">
                <label htmlFor="amount-field">Transaction amount</label>
                <input className="" id="amount-field"
                    type="text"
                    onChange={(event) => props.handleAmountChange(event)}
                />                
            </div>


            <div className="input-group">
                <label htmlFor="status-field">Transaction status</label>
                <input className="" id="status-field"
                    type="text"
                    onChange={(event) => props.handleStatusChange(event)}
                />                
            </div>


            <div className="input-group">
                <label htmlFor="country-field">Country of origin</label>
                <input className="" id="country-field"
                    type="text"
                    onChange={(event) => props.handleCountryChange(event)}
                />                
            </div>


            <div className="input-group">
                <label htmlFor="city-field">City of residence</label>
                <input className="" id="city-field"
                    type="text"
                    onChange={(event) => props.handleCityChange(event)}
                />                
            </div>

            <div className="input-group">
                <label htmlFor="phone-field">Phone number</label>
                <input className="" id="phone-field"
                    type="text"
                    onChange={(event) => props.handlePhoneChange(event)}
                />
            </div>
            {/* <input className="submit-button"
                type="submit"  //--- apparently "submit" disconnects the form if btn has click event
                value="File Invoice"
            /> */}
            <SubmitForm />
            
        </form>
    </div>
  )
}

const curryHandleSubmit = (props) => {
    return function(event) {

        event.preventDefault();

        postInvoice(
            props, 
            $, 
            createRequestObject, 
            getSimpleDate
        );
        

        props.toggleEditor(! props.editorOpen);
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit)