import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createContext } from "react";
import * as actions from "../redux/actions";
// import Invoice from "../components/Invoice";  //these are now props
// import InvoicesTop from "../components/InvoicesTop";
// import InvoiceEdit from "../components/InvoiceEdit"; 
import Delayed from "../components/Delayed";
import "../css/Invoices.scss";

const $ = require("jquery");
//const Context = createContext();

function Invoices(props) {

    useEffect(() => {
        $.ajax({
            url: props.path,
            type: "GET",
            success: (response) => {
                props.loadInvoices(response);
                props.initializeFilteredInvoices(response);
            }
        });
    }, [props.editorOpen]); //each time editor opens and closes it assumes an invoice was uploaded to the server and updates with new data. I'm only interested in the closed status but I don't know how to filter that

    return (
        <div className="invoices-container">

            <props.InvoicesTop invoiceCount={props.filteredInvoices.length} />

            <div className="invoices">
                {
                    props.filteredInvoices.map((invoice, index) => 
                        <Delayed delay={progressiveDelayRender(
                                index,
                                props.filteredInvoices.length,
                                props.delayIncrement,
                                makeDelayArray
                            )}
                        > 
                            <props.Invoice 
                                key={invoice.ORD_NUM}
                                name={invoice.CUST_NAME} 
                                number={invoice.ORD_NUM}
                                date={invoice.ORD_DATE}
                                amount={invoice.ORD_AMOUNT}
                                status={invoice.ORD_DESCRIPTION} 
                                index={props.filteredInvoices.indexOf(invoice)}
                            />                            
                        </Delayed>

                    )
                }
            </div>

            {
                props.editorOpen ?
                    <props.InvoiceEdit />
                :
                    null
            }

            {
                props.deleteConfirmation ?
                    <props.DeleteConfirmation notifyDelete={props.notAnActualDispatch}/>
                :
                    null
            }
        </div>
    )
}

const makeDelayArray = (itemCount, delayIncrement) => {
    const delayArray = [];
    for(var i = 0; i < itemCount; i++){
        delayArray[i] = delayIncrement + i * delayIncrement;
    }
    return delayArray;
}

const progressiveDelayRender = (itemIndex, itemCount, delayIncrement, callback) => {
    const delayArray = callback(itemCount, delayIncrement);
    return delayArray[itemIndex];
}

const mapStateToProps = (state) => {
    return{
        invoices: state.data.abridgedInvoices,
        filteredInvoices: state.data.filteredInvoices,
        editorOpen: state.ui.editorOpen,
        deleteConfirmation: state.ui.deleteConfirmation,
        invoiceToEdit: state.ui.invoiceToEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadInvoices: (invoices) => {
            dispatch(actions.abridgedInvoicesLoaded(invoices));
        },
        initializeFilteredInvoices: (invoices) => {
            dispatch(actions.invoicesFiltered(invoices));
        },
        notAnActualDispatch: (props) => {
            const invoiceObject = props.invoices[props.invoiceToEdit];
            const order = invoiceObject.ORD_NUM;
            const $ = require("jquery");
            $.ajax({
                type: "POST",
                url: "/api/invoices/delete",
                data: order,
                success: (response => {
                    console.log(response)
                })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);