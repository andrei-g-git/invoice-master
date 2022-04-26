const postInvoice = (changes, order, customerCode, isNew) => {

    let invoice = {
        ORD_NUM: order,
        ORD_DATE: "",
        ORD_AMOUNT: changes.amount,
        ORD_DESCRIPTION: changes.status,
        CUST_NAME: changes.name,
        CUST_COUNTRY: changes.country,
        CUST_CITY: changes.city,
        PHONE_NO: changes.phone,
        CUST_CODE: customerCode
    };
    if(isNew){
        invoice.CUST_CODE = "";           
    }

    const $ = require("jquery");
    let url = "/api/invoices/add";
    if(! isNew){
        url = "/api/invoices/edit";
    }    
    const requestObject = {
        type: "POST",
        url: url,
        data: {
            ...invoice
        },
        success: response => {
            console.log(response)
        }  
    };
    $.ajax(requestObject);

    return requestObject; //for testing
}


// const getSimpleDate = () => {
//     const dateObject = new Date();
//     const year = dateObject.getUTCFullYear();
//     const month = dateObject.getUTCMonth() + 1; //starts from 0 
//     const day = dateObject.getUTCDate(); //date actually gets the day...
//     const date = year + "-" + month + "-" + day;
//     console.log(date);
//     return date;
// }

export {
    postInvoice
}