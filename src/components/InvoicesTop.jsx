import { connect } from 'react-redux'
import NewInvoice from "./NewInvoice";
import FilterByStatus from "./FilterByStatus";
import "../css/InvoicesTop.scss";

function InvoicesTop(props) {
    return (
        <div className="invoices-top-panel">
        <div className="invoice-counter">
            <h1>Invoices</h1>
            <p>You have {props.invoiceCount} invoices</p>
        </div>

        <div className="invoice-top-right">
            <FilterByStatus />

            <NewInvoice noteIndex={props.invoices.length}/> {/* put new note at the end of the array */}
        </div>

    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        invoices: state.data.abridgedInvoices
    }
};

export default connect(mapStateToProps, null)(InvoicesTop)
