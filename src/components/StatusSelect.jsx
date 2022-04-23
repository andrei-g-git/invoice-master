import { useState, useEffect } from 'react';

function StatusSelect(props) {

    const [content, setContent] = useState(props.content);

    useEffect(() => {
        props.notifyChange({
            target: {
                value: content
            }
        }); //not a change, but otherwise only input changes will update the store with the form values to be submitted
    }, []);

    const statuses = new Map();
    statuses.set("OVD", "Overdue");
    statuses.set("PEN", "Pending");
    statuses.set("SOD", "Completed");

    let editingExisting = false;
    //let selected = false;
    if(props.content !== undefined && props.content !== ""){
        editingExisting = true;
        //selected = true; //this is silly
    }

    const selectedList = determineIfSelected(statuses, props.options, props.content);

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
                        selected={selectedList[item.id]}//{selected} //apparently react is smart enough to omit the attribute if the value is false
                    >
                        {item.value}
                    </option>
                )
            }
        </select>
  )
}

const determineIfSelected = (statuses, options, value) => {
    let selectedList = [
        false, 
        false, 
        false
    ];    
    if(value !== undefined && value !== ""){

        const selectedOptionObject = options.filter(item => item.value == statuses.get(value));
        const index = selectedOptionObject[0].id;   
        selectedList[index] = true;     
    }

    return selectedList;
}

export default StatusSelect;