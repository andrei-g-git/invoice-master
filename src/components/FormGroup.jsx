import React from 'react';
import "../css/InvoiceEdit.scss";

function FormGroup(props) {
  return (
    <div className="input-group">
        <label htmlFor="city-field">{props.title}</label>
        <input className="" id="city-field"
            type="text"
            onChange={(event) => props.notifyChange(event)} //from parent component
        />                
    </div>
  )
}

export default FormGroup;