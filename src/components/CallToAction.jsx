import React from 'react';
import "../css/NewInvoice.scss";

function CallToAction(props) {
  return (
    <div className="new-invoice">
        <div className={props.icon + "-icon"}>

        </div>
        <div className="new-invoice-label">
            <b className="new-invoice-label-first-word">
                {props.firstWord}
            </b>
            <b className="new-invoice-label-second-word">
            {props.secondWord}
            </b>
        </div>
    </div>
  )
}

export default CallToAction;