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
import { statuses } from '../js/statuses';
import "../css/InvoiceEdit.scss";

const $ = require("jquery");

//IF THE EDITED NOTE INDEX IS SMALLER THAN THE LENGTH OF THE INVOICES ARRAY then find way to pre-fill all the input fields with the proper invoice info, including the select element


export const InvoiceEdit = (props) => {

    const content = getInputContentOrBlanks(props.invoices, props.index);

    return (
        <div className="edit-form-container">     
            <form className="edit-form"
                data-testid="edit-form"
                onSubmit={curryHandleSubmit(props)}
            >

                <FormGroup title="Customer name"
                    content={content.name}
                    notifyChange={props.handleNameChange}
                />

                <FormGroup title="Transaction amount"
                    content={content.amount}
                    notifyChange={props.handleAmountChange}
                />

                <div className="status-select-wrapper">
                    <StatusSelect content={ statuses.filter(item => item.sql === content.status)[0].value }
                        options={statuses}
                        placeholder="Select completion status"
                        notifyChange={props.handleStatusChange}
                    />
                </div>

                <FormGroup title="Country of origin"
                    content={content.country}
                    notifyChange={props.handleCountryChange}
                />

                <FormGroup title="City of residence"
                    content={content.city}
                    notifyChange={props.handleCityChange}
                />

                <FormGroup title="Phone number"
                    content={content.phone}
                    notifyChange={props.handlePhoneChange}
                />

                <SubmitForm />
                
            </form>
        </div>
  )
}

const getInputContentOrBlanks = (invoices, index) => {
    let name = "",
        amount = null,
        status = "",
        country = "",
        city = "",
        phone = null;

    if(index < invoices.length){
        name = invoices[index].CUST_NAME;
        amount = invoices[index].ORD_AMOUNT;
        status = invoices[index].ORD_DESCRIPTION;
        country = invoices[index].CUST_COUNTRY;
        city = invoices[index].CUST_CITY;
        phone = invoices[index].PHONE_NO;      
    }
    return{
        name: name,
        amount: amount,
        status: status,
        country: country,
        city: city,
        phone: phone        
    }
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
            // const elementValue = event.target.value;
            // let data = "";
            // switch(elementValue){
            //     case "Pending": case "pending": case "PEN":
            //         data = "PEN";
            //         break;
            //     case "Completed": case "completed": case "SOD":
            //         data = "SOD";
            //         break;
            //     case "Overdue": case "overdue": case "OVD":
            //         data = "OVD";
            //         break;
            //     default:
            //         data = "PEN";
            //         break;
            // }

            //this is not functional programing ...
            const optionValue = event.target.value;
            const statusObject = statuses.filter(item => /* item.sql */ item.value === optionValue)[0]; //this is pretty bad too, I don't know where I'm passing sql handles and where I' m passing display values...
            const data = statusObject.sql;
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