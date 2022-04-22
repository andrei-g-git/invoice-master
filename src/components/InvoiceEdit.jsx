import React from 'react';
import { connect } from 'react-redux';
import SubmitForm from './SubmitForm';
import FormGroup from './FormGroup';
import StatusSelect from './StatusSelect';
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

            <FormGroup title="Customer name"
                notifyChange={props.handleNameChange}
            />

            <FormGroup title="Transaction amount"
                notifyChange={props.handleAmountChange}
            />

            <div className="status-select-wrapper">
                <StatusSelect options={[
                        {value: "Pending", id: 0},
                        {value: "Completed", id: 1},
                        {value: "Overdue", id: 2},
                    ]}
                    placeholder="Select completion status"
                    notifyChange={props.handleStatusChange}
                />
            </div>
            
            <FormGroup title="Country of origin"
                notifyChange={props.handleCountryChange}
            />

            <FormGroup title="City of residence"
                notifyChange={props.handleCityChange}
            />

            <FormGroup title="Phone number"
                notifyChange={props.handlePhoneChange}
            />

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
            const elementValue = event.target.value;
            let data = "";
            switch(elementValue){
                case "Pending": case "pending": case "PEN":
                    data = "PEN";
                break;
                case "Completed": case "completed": case "SOD":
                    data = "SOD";
                break;
                case "Overdue": case "overdue": case "OVD":
                    data = "OVD";
                break;
                default:
                    data = "PEN";
                break;
            }

            dispatch(statusChanged(data));
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