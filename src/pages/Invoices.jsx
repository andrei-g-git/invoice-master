import React, { useEffect/* , Component  */} from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import Delayed from "../components/Delayed";
import "../css/Invoices.scss";

// class Invoices extends Component {
//     constructor(props){
//         super(props);
//     }

//     componentDidMount(){
//         fetchAndLoadState(this.props);

//     }

//     getSnapshotBeforeUpdate(prevProps){
//         if(prevProps.editorOpen !== this.props.editorOpen){
//             fetchAndLoadState(this.props); //this is async so it won't be ready before the update happens (luckily it updates again after that ... as it does ...)
//         }
//     }

    //render(){
function Invoices(props){

    useEffect(() => {
        fetchAndLoadState(props);
    },
        []
    );

    return (
        <div className="invoices-container">

            {/* <this.props.InvoicesTop invoiceCount={this.props.filteredInvoices.length} /> */}
            <props.InvoicesTop invoiceCount={props.filteredInvoices.length} />

            <div className="invoices">
                {
                    //this.props.filteredInvoices.map((invoice, index) => 
                    props.filteredInvoices.map((invoice, index) => 
                        <Delayed delay={progressiveDelayRender(
                                index,
                                /* this. */props.filteredInvoices.length,
                                /* this. */props.delayIncrement,
                                makeDelayArray
                            )}
                            key={invoice.ORD_NUM}
                        > 
                            {/* <this.props.Invoice */} 
                            <props.Invoice
                                key={invoice.ORD_NUM}
                                name={invoice.CUST_NAME} 
                                number={invoice.ORD_NUM}
                                date={invoice.ORD_DATE}
                                amount={invoice.ORD_AMOUNT}
                                status={invoice.ORD_DESCRIPTION} 
                                index={/* this. */props.filteredInvoices.indexOf(invoice)}
                            />                            
                        </Delayed>

                    )
                }
            </div>

            {
                /* this. */props.editorOpen ?
                    //<{/* this. */}props.InvoiceEdit />
                    <props.InvoiceEdit />
                :
                    null
            }

            {
                /* this. */props.confirmationOpen ? 
                    //</* this. */props.DeleteConfirmation notifyDelete={/* this. */handleInvoiceDeletion}/>
                    //<{/* this. */}props.DeleteConfirmation notifyDelete={this.curryHandleInvoiceDeletion(
                    <props.DeleteConfirmation notifyDelete={curryHandleInvoiceDeletion(
                            /* this. */props.invoices,
                            /* this. */props.invoiceToEdit,
                            "ORD_NUM",
                            /* this. */fetchAndLoadState,
                            /* this. */props,
                            /* this. */props.toggleEditor                                
                        )}
                    />
                :
                    null
            }
        </div>
    )
    //}
}

const handleInvoiceDeletion = () => {
    const invoiceObject = this.props.invoices[this.props.invoiceToEdit];
    const order = invoiceObject.ORD_NUM;
    const $ = require("jquery");
    $.ajax({
        type: "POST",
        url: "/api/invoices/delete",
        data: {
            order: order
        },
        success: (response => {
            console.log(response)

            fetchAndLoadState(this.props)

        })
    });

    this.props.toggleEditor(false);
}

const curryHandleInvoiceDeletion = (
    invoices,
    invoiceToEdit,
    orderPropertyName,
    fetchAndLoadState,
    props,
    toggleEditor
) => {
    return () => {
        const invoiceObject = invoices[invoiceToEdit];
        const order = invoiceObject[orderPropertyName];//.ORD_NUM;
        const $ = require("jquery");   
        $.ajax({
            type: "POST",
            url: "/api/invoices/delete",
            data: {
                order: order
            },
            success: (response => {
                console.log(response)

                fetchAndLoadState(props)

            })
        });

        toggleEditor(false);                     
    }
}


const fetchAndLoadState = (props) => {
    const $ = require("jquery");
    $.ajax({
        url: props.path,
        type: "GET",
        success: (response) => {
            props.loadInvoices(response);
            props.initializeFilteredInvoices(response);
        }
    }); 
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
        //deleteConfirmation: state.ui.deleteConfirmation,
        confirmationOpen: state.ui.confirmationOpen,
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
        toggleEditor: (isOpen) => {
            dispatch(actions.editorToggled(isOpen));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);