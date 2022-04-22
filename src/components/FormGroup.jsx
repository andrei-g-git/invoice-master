import { useState, useEffect } from 'react';
import "../css/InvoiceEdit.scss";

function FormGroup(props) {

    const [content, setContent] = useState(props.content);

    useEffect(() => {
        props.notifyChange({
            target: {
                value: content
            }
        }); //not a change, but otherwise only input changes will update the store with the form values to be submitted
    }, []);

    return (
        <div className="input-group">
            <label htmlFor="city-field">{props.title}</label>
            <input className="" id="city-field"
                type="text"
                required
                //defaultValue={props.content}
                value={content}
                onChange={(event) => { 
                    props.notifyChange(event); //from parent component
                    setContent(event.target.value)
                }} 
            />                
        </div>
  )
}

export default FormGroup;