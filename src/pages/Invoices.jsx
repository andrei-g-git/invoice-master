import { useEffect } from "react";
import { connect } from "react-redux";
import { createContext } from "react";
import * as actions from "../redux/actions";
import Invoice from "../components/Invoice";
//import NewInvoice from "../components/NewInvoice";
import InvoicesTop from "../components/InvoicesTop";
import InvoiceEdit from "../components/InvoiceEdit"; 
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

            <InvoicesTop invoiceCount={props.filteredInvoices.length} />

            <div className="invoices">
                {
                    props.filteredInvoices.map(invoice => 
                        <Invoice 
                            key={invoice.ORD_NUM}
                            name={invoice.CUST_NAME} 
                            number={invoice.ORD_NUM}
                            date={invoice.ORD_DATE}
                            amount={invoice.ORD_AMOUNT}
                            status={invoice.ORD_DESCRIPTION} 
                            index={props.filteredInvoices.indexOf(invoice)}
                        />
                    )
                }
            </div>

            {
                props.editorOpen ?
                    <InvoiceEdit />
                :
                    null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        invoices: state.data.abridgedInvoices,
        filteredInvoices: state.data.filteredInvoices,
        editorOpen: state.ui.editorOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadInvoices: (invoices) => {
            dispatch(actions.abridgedInvoicesLoaded(invoices));
        },
        initializeFilteredInvoices: (invoices) => {
            dispatch(actions.invoicesFiltered(invoices));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);