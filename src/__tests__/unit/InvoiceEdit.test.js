//import React from "react";
//import enzyme, { shallow } from "enzyme";
//import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import /* InvoiceEdit, */ { postInvoice } from "../../components/InvoiceEdit";
//import { makeStore } from "../../redux/makeStore"; //not exactly a unit test


//enzyme.configure({adapter: new Adapter()});

describe("InvoiceEdit unit and functionality", () => {
    it("test", () => {
        const changes =  {
            name: "",
            amount: "",
            status: "",
            country: "",
            city: "",
            phone: ""
        }

        const invoices = [
            {
                ORD_NUM: 123
            }
        ]

        const props = {
            changes: changes,
            invoices: invoices,
            index: 0
        }
        //let wrapper = shallow(<InvoiceEdit store={makeStore()} changes={changes} invoices={invoices}/>);
        let $ = {
            ajax: (requestObject) => {
                return 1
            }
        }  //require("jquery");
        expect(postInvoice(props, $)).toBeTruthy();
        expect(postInvoice(props, $).ulr).toBe("/api/invoices/adddddddddddddddd")
    });
});