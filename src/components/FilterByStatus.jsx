import { connect } from "react-redux";
import * as actions from "../redux/actions";
import "../css/FilterByStatus.scss";

function FilterByStatus(props) {
  return (
    <div className="filter-by-status">
        <label className="status-select-label" 
            htmlFor="status-select" 
        >
            Filter by
        </label>

        <select className="status-select"
            number={1}
            onChange={event => props.filterInvoices(event, props.rawInvoices)}
        >
            <option className="status-option" 
                defaultValue="all"
                value="all"
            >
                All
            </option>              
            <option className="status-option" 
                value="paid"
            >
                Paid
            </option>    
            <option className="status-option" 
                value="pending"
            >
                Pending
            </option>               
            <option className="status-option" 
                value="overdue"
            >
                Overdue
            </option>   
        </select> 
    </div>
  )
}

const doActualFiltering = (event, rawInvoices) => {
    switch(event.target.value){
        case "all":
            return rawInvoices;
        case "paid":
                return rawInvoices.filter(invoice => invoice.ORD_DESCRIPTION === "SOD");
        case "pending":
            return rawInvoices.filter(invoice => invoice.ORD_DESCRIPTION === "PEN");      
        case "overdue":
            return rawInvoices.filter(invoice => invoice.ORD_DESCRIPTION === "OVD");                        
        default:
            return rawInvoices;
    }
}

const mapStateToProps = (state) => {
    return{
        rawInvoices: state.data.abridgedInvoices
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        filterInvoices: (event, rawInvoices) => {
            const filteredInvoices = doActualFiltering(event, rawInvoices);

            dispatch(actions.invoicesFiltered(filteredInvoices));

            event.preventDefault();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterByStatus);