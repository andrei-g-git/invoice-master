import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { createContext } from "react";
import * as actions from "../redux/actions";
// import Invoice from "../components/Invoice";  //these are now props
// import InvoicesTop from "../components/InvoicesTop";
// import InvoiceEdit from "../components/InvoiceEdit"; 
import Delayed from "../components/Delayed";
import "../css/Invoices.scss";

class Invoices extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // const $ = require("jquery");
        // $.ajax({
        //     url: this.props.path,
        //     type: "GET",
        //     success: (response) => {
        //         this.props.loadInvoices(response);
        //         this.props.initializeFilteredInvoices(response);
        //     }
        // });  
        
        fetchAndLoadState(this.props);

    }
    // componentDidUpdate(){
    //     $.ajax({
    //         url: this.props.path,
    //         type: "GET",
    //         success: (response) => {
    //             this.props.loadInvoices(response);
    //             this.props.initializeFilteredInvoices(response);
    //         }
    //     });        
    // }


    // useEffect(() => {
    //     $.ajax({
    //         url: props.path,
    //         type: "GET",
    //         success: (response) => {
    //             props.loadInvoices(response);
    //             props.initializeFilteredInvoices(response);
    //         }
    //     });
    // }, [props.editorOpen]); //each time editor opens and closes it assumes an invoice was uploaded to the server and updates with new data. I'm only interested in the closed status but I don't know how to filter that
    render(){
        return (
            <div className="invoices-container">

                <this.props.InvoicesTop invoiceCount={this.props.filteredInvoices.length} />

                <div className="invoices">
                    {
                        this.props.filteredInvoices.map((invoice, index) => 
                            <Delayed delay={progressiveDelayRender(
                                    index,
                                    this.props.filteredInvoices.length,
                                    this.props.delayIncrement,
                                    makeDelayArray
                                )}
                            > 
                                <this.props.Invoice 
                                    key={invoice.ORD_NUM}
                                    name={invoice.CUST_NAME} 
                                    number={invoice.ORD_NUM}
                                    date={invoice.ORD_DATE}
                                    amount={invoice.ORD_AMOUNT}
                                    status={invoice.ORD_DESCRIPTION} 
                                    index={this.props.filteredInvoices.indexOf(invoice)}
                                />                            
                            </Delayed>

                        )
                    }
                </div>

                {
                    this.props.editorOpen ?
                        <this.props.InvoiceEdit />
                    :
                        null
                }

                {
                    this.props.confirmationOpen ? 
                        <this.props.DeleteConfirmation notifyDelete={this.handleInvoiceDeletion}/>
                    :
                        null
                }
            </div>
        )
    }

    handleInvoiceDeletion = () => {
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