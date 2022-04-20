import React from 'react';
import { connect } from 'react-redux';
import { editorToggled } from '../redux/actions';
import "../css/InvoiceEdit.scss";

const $ = require("jquery");

export const InvoiceEdit = (props) => {
  return (
    <div className="edit-form-container">     
        <form className="edit-form"
            data-testid="edit-form"
            onSubmit={null}
        >
            <label htmlFor="name-field">Customer name</label>
            <input className="" id="name-field"
                type="text"
            />

            <label htmlFor="amount-field">Transaction amount</label>
            <input className="" id="amount-field"
                type="text"
            />

            <label htmlFor="status-field">Transaction status</label>
            <input className="" id="status-field"
                type="text"
            />

            <label htmlFor="country-field">Country of origin</label>
            <input className="" id="country-field"
                type="text"
            />

            <label htmlFor="city-field">City of residence</label>
            <input className="" id="city-field"
                type="text"
            />

            <label htmlFor="phone-field">Phone number</label>
            <input className="" id="phone-field"
                type="text"
            />

            <input className=""
                type="submit"
                value="File Invoice"
                onClick={() => props.toggleEditor(! props.editorOpen)}
            />

            
        </form>
    </div>
  )
}

const handleSubmit = () => {
    
}

const uploadInvoice = (data) => {
    $.ajax({
        type: "POST",
        url: "/api/invoices",
        data: { invoice: {
            name: data.name,
            order: data.order,
            date: data.date,
            amount: data.amount,
            status: data.status,
            country: data.country,
            city: data.city,
            phone: data.phone
        }},
        success: response => {
            console.log(response)
            //props.fetchSearchedGames(response)
        }        
    })
};

const mapStateToProps = (state) => {
	return {
		editorOpen: state.ui.editorOpen,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleEditor: (isOpen) => {
			dispatch(editorToggled(isOpen));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit)