import { useEffect } from "react";
import { connect } from "react-redux";
import { createContext } from "react";
import * as actions from "../redux/actions";
import Invoice from "../components/Invoice";
import "../css/Invoices.scss";

const $ = require("jquery");
const Context = createContext();

function Invoices(props) {

    useEffect(() => {
        $.ajax({
            url: props.path,
            type: "GET",
            success: (response) => {
                props.loadInvoices(response);
            }
        });
    }, []);

    return (
        <div className="invoices-container">
            <div className="invoices-top-panel">
                <div className="invoice-counter">
                    <h1>Invoices</h1>
                    <p>You have {props.invoices.length} invoices</p>
                </div>

                <div className="invoice-filter">

                </div>

                <div className="add-invoice">

                </div>
            </div>

            <div className="invoices">
                {
                    props.invoices.map(invoice => 
                        <Invoice 
                            key={invoice.ORD_NUM}
                            name={invoice.CUST_NAME} 
                            number={invoice.ORD_NUM}
                            date={invoice.ORD_DATE}
                            amount={invoice.ORD_AMOUNT}
                            status={invoice.ORD_DESCRIPTION} 
                        />
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        invoices: state.data.abridgedInvoices
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadInvoices: (invoices) => {
            dispatch(actions.abridgedInvoicesLoaded(invoices));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);