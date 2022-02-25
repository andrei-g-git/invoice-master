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

            <NewInvoice />
        </div>

    </div>
    )
}

export default InvoicesTop;