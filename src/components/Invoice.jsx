import ToggleEditor from "./ToggleEditor";
import "../css/Invoice.scss";

import editIcon from "../assets/edit-white.png"

function Invoice(props) {

    let usefulStatus = "N/A";
    let statusName = "";

    const dateWithoutTime = props.date.slice(0, 10); //converting the date in the sql query doesn't seem to work

    switch(props.status){
        case "SOD": 
            usefulStatus = "PAID";
            statusName = "paid"; 
            break;
        case "PEN": 
            usefulStatus = "PENDING";
            statusName = "pending"; 
            break;
        case "OVD": 
            usefulStatus = "OVERDUE";
            statusName = "overdue"; 
            break;
        default: usefulStatus = "N/A";
            statusName = ""; break;
    }

    return (
        <div className="invoice"
        >
            <p className="invoice-client">{props.name}</p>
            <p className="invoice-number">{props.number}</p>
            <p className="invoice-date">{dateWithoutTime}</p>
            <h2 className="invoice-amount">€{props.amount}</h2>
            <div className={"invoice-status-container-" + statusName}>
                <p className="invoice-status">{usefulStatus}</p>
            </div>

            {/* <div className="edit-invoice-container">
                <div className="edit-invoice">
                    
                </div>
            </div> */}
            <ToggleEditor noteIndex={props.index} >
                {/* <div className="edit-invoice-container">
                    <div className="edit-invoice">
                        
                    </div>
                </div> */}

                <img src={editIcon}
                    alt="n/a"
                    style={{width: 32, height: 32}}
                />
            </ToggleEditor>

        </div>
    )
}

export default Invoice; 