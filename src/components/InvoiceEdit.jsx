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
            onSubmit={/* () =>  */curryHandleSubmit(props)}
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
                //onClick={() => props.toggleEditor(! props.editorOpen)}
            />

            
        </form>
    </div>
  )
}

const curryHandleSubmit = (props) => {
    console.log("curry handle submit" + props.changes)
    return function(event) {
        console.log("curry handle submit")

        const changes = props.changes;

        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "/api/invoices/add",
            data: { 
                //invoice: {
                    name: changes.name,
                    order: 999,//changes.order,
                    date: "99-99-99",//changes.date,
                    amount: changes.amount,
                    status: changes.status,
                    country: changes.country,
                    city: changes.city,
                    phone: changes.phone
            /* } */},
            success: response => {
                console.log(response)
                //props.fetchSearchedGames(response)
            }        
        });

        props.toggleEditor(! props.editorOpen);
    }
}

const uploadInvoice = (data) => {
    
};

const mapStateToProps = (state) => {
	return {
		editorOpen: state.ui.editorOpen,
        // name: state.ui.edit.name,
        // amount: state.ui.edit.amount,
        // status: state.ui.edit.state,
        // country: state.ui.edit.country,
        // city: state.ui.edit.city,
        // phone: state.ui.edit.phone
        changes: state.ui.edit
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleEditor: (isOpen) => {
			dispatch(editorToggled(isOpen));
		},
        handleNameChange: (event) => {
            //return (event) => {
                dispatch(nameChanged(event.target.value));
            //}
        },
        handleAmountChange: (event) => {
            //return (event) => {
                dispatch(amountChanged(event.target.value));
            //}
        },
        handleStatusChange: (event) => {
            //return (event) => {
                dispatch(statusChanged(event.target.value));
            //}
        },
        handleCountryChange: (event) => {
            //return (event) => {
                dispatch(countryChanged(event.target.value));
            //}
        },
        handleCityChange: (event) => {
            //return (event) => {
                dispatch(cityChanged(event.target.value));
            //}
        },
        handlePhoneChange: (event) => {
            //return (event) => {
                dispatch(phoneChanged(event.target.value));
            //}
        }                                        
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit)