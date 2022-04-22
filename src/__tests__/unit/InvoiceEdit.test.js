import { postInvoice, createRequestObject, getSimpleDate } from "../../js/invoiceEdit";//"../../components/InvoiceEdit"; //not exactly a unit test, but they are just helper functions

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

        let props = {
            changes: changes,
            invoices: invoices,
            index: 0
        }

        let $ = {
            ajax: (requestObject) => {
                return 1
            }
        }  
        let request = postInvoice(props, $, createRequestObject, getSimpleDate);
        console.log(request);
        expect(request).toBeTruthy();
        expect(request.url).toBe("/api/invoices/edit");
        expect(request.data.order).toBe(123);
        expect(request.data.customerCode).toBe("C00001");
        props.index = 1;
        request = postInvoice(props, $, createRequestObject, getSimpleDate);
        expect(request.url).toBe("/api/invoices/add");
        expect(request.data.order).toBe(124);
        expect(request.data.customerCode).toBe("C00002");

        expect(request.data.date).toContain("202") // 2022-04-day
    });
});