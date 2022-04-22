import React from 'react';

function StatusSelect(props) {
    const statuses = new Map();
    statuses.set("OVD", "Overdue");
    statuses.set("PEN", "Pending");
    statuses.set("SOD", "Completed");

    let editingExisting = false;
    let selected = false;
    if(props.content !== undefined && props.content !== ""){
        editingExisting = true;
        selected = true;
    }

    return (
        <select className="status-select"
            name="testing name"
            required
            onChange={(event) => props.notifyChange(event)}
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
                        selected={selected} //apparently react is smart enough to omit the attribute if the value is false
                    >
                        {item.value}
                    </option>
                )
            }
        </select>
  )
}

export default StatusSelect;