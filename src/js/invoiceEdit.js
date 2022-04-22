const postInvoice = (props, $, createRequestObject, getSimpleDate) => {
    const changes = props.changes;

    const invoicesLength = props.invoices.length;
    const isNewInvoice = props.index == invoicesLength;

    const newestInvoice = props.invoices[invoicesLength - 1];

    let url = "/api/invoices/add";
    let order = newestInvoice.ORD_NUM + 1;

    const justTheCustomerElements = props.invoices.map(item => item.CUST_CODE);
    const customers = [... new Set(justTheCustomerElements)]; //filter unique names , es6 or later
    let customerRealNumber = customers.length + 1;
    if(! isNewInvoice){
        url = "/api/invoices/edit";
        const selectedInvoice = props.invoices[props.index];
        order = selectedInvoice.ORD_NUM;
        customerRealNumber = selectedInvoice.CUST_CODE;
    }

    let customerCode = "C000" + customerRealNumber.toString(); 
    if(invoicesLength > 99){
        customerCode = "C00" + customerRealNumber.toString();
    }
    if(invoicesLength <= 9){
        customerCode = "C0000" + customerRealNumber.toString();
    }

    const date = getSimpleDate();

    const requestObject = createRequestObject(url, changes, order, date, customerCode);       

    $.ajax(requestObject);

    return requestObject; //for testing
}

const createRequestObject = (url, changes, order, date, customerCode) => {
    return {
        type: "POST",
        url: url,
        data: { 
            name: changes.name,
            customerCode: customerCode,
            order: order,
            date: date, 
            amount: changes.amount,
            status: changes.status,
            country: changes.country,
            city: changes.city,
            phone: changes.phone
        },
        success: response => {
            console.log(response)
        }         
    }
}

const getSimpleDate = () => {
    const dateObject = new Date();
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1; //starts from 0 
    const day = dateObject.getUTCDate(); //date actually gets the day...
    const date = year + "-" + month + "-" + day;
    console.log(date);
    return date;
}

export {
    postInvoice,
    createRequestObject,
    getSimpleDate
}