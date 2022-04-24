/**
 * @jest-environment jsdom
 */

import React from "react";
import {cleanup, screen, render} from "@testing-library/react";
import Invoices from "../../pages/Invoices";
import { makeStore } from "../../redux/makeStore";
//import configureStore from "redux-mock-store";

// const mockStore = configureStore([]); //argument is the middleware array
// const makeDummyInvoice = () => ({
//     ORD_NUM: null,
//     CUST_NAME: null, 
//     ORD_NUM: null,
//     ORD_DATE: null,
//     ORD_AMOUNT: null,
//     ORD_DESCRIPTION: null    
// });
// const initialState = {
//     data: {
//         abridgedInvoices: [ //these are brittle but if I handle the props in the parent component I'll have to also handle the all REST api shit there and the store management, it would be a god controller
//             makeDummyInvoice(),
//             makeDummyInvoice(),
//             makeDummyInvoice(),
//             makeDummyInvoice()
//         ],
//         filteredInvoices: [
//             makeDummyInvoice(),
//             makeDummyInvoice(),
//             makeDummyInvoice(),
//             makeDummyInvoice()
//         ]
//     }, 
//     ui: {
//         editorOpen: false
//     }
// }

// const store = mockStore(initialState);

describe("<Invoices> INTEGRATION", () => {
    afterEach(() => {
        cleanup();
    });

    // it("renders the invoices with a delay between each", () => {

    //     const mapStateToProps = jest.spyOn(Invoices, 'mapStateToProps');
    //     mapStateToProps.mockImplementation((state) => {});

    //     const mapDispatchToProps = jest.spyOn(Invoices, 'mapDispatchToProps');
    //     mapDispatchToProps.mockImplementation((dispatch) => {});

    //     render(<Invoices //store={makeStore()} 
    //             delayIncrement={100}

    //             Invoice={<div>an invoice</div> }
    //             InvoicesTop={() => {}}
    //             InvoiceEdit={() => {}}

    //             loadInvoices={(response) => {}}
    //             initializeFilteredInvoices={(response) => {}}


    //             invoices ={abridgedInvoices}
    //             filteredInvoices ={filteredInvoices}
    //             editorOpen ={editorOpen}
    //         />
    //     );
    // });

    it("renders the invoices with a delay between each", () => {
        const delayIncrement = 100; //ms
        render(<Invoices store={makeStore()} //Nothing was returned from render. This usually means a return statement is missing.     fuck knows...
                path="awfweaf"
                delayIncrement={delayIncrement}

                Invoice={<div>an invoice</div> }
                InvoicesTop={() => {}}
                InvoiceEdit={() => {}}
            />
        );

        const invoicesLength = 35;
        const finalInvoiceDelay = delayIncrement + 34 * delayIncrement;
        const invoices = screen.getAllByText(/an invoice/);
        setTimeout(() => {
            expect(invoices[34]).toBeVisible();
        }, finalInvoiceDelay + 1000) //this should fail
    });
});

//probably need to learn how to dispatch the invoicesFiltered action and load a dummy invoice list, then determine the highest delay for the last element, then timeout the assertion 
//for that amount and assert that it's then visible with expect().toBeVisible()