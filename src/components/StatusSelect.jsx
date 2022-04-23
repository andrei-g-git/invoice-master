import React from 'react';
import { useState, useEffect } from 'react';

function StatusSelect(props) {

    const [content, setContent] = useState(props.content);

    useEffect(() => {
        props.notifyChange({
            target: {
                value: /* props.options.filter(item => item.sql == props.content)[0].value */ props.content  //I have to change this
            }
        }); //not a change, but otherwise only input changes will update the store with the form values to be submitted
    }, []);

    let editingExisting = false;
    if(props.content !== undefined && props.content !== ""){
        editingExisting = true;
    }

    const selectedList = determineIfSelected(props.options, props.content);

    return (
        <select className="status-select"
            name="testing name"
            required
            onChange={(event) => { 
                props.notifyChange(event); //from parent component
                setContent(event.target.value)
            }} 
        >
            {
                editingExisting ? 
                    null
                :
                    <option className="status-value"
                        value=""

                    >
                        {props.placeholder}
                    </option>                    
            }


            {
                props.options.map(item => 
                    <option className="status-value"
                        value={item.value}
                        key={item.id}
                        selected={selectedList[item.id]}//apparently react is smart enough to omit the attribute if the value is false
                    >
                        {item.value}
                    </option>
                )
            }
        </select>
  )
}

const determineIfSelected = (options, value/* sqlValue */) => {
    let selectedList = [
        false, 
        false, 
        false
    ];    

    //const selectedOptionObject = options.filter(item => item.sql == sqlValue);
    const selectedOptionObject = options.filter(item => item.value == value);
    if(selectedOptionObject.length){
        const index = selectedOptionObject[0].id;   
        selectedList[index] = true;              
    }

    return selectedList;
}

export default StatusSelect;