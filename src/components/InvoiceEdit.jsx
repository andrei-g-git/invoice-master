import React from 'react';
import { connect } from 'react-redux';
import "../css/InvoiceEdit.scss";

export const InvoiceEdit = (props) => {
  return (
    <div className="edit-form-container">
        <form className="edit-form"
            data-testid="edit-form"
            //style={{backgroundColor: "blue"}}
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
            />

            
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit)