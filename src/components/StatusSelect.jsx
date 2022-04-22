import React from 'react';

function StatusSelect(props) {
  return (
    <select className="status-select"
        name="testing name"
        required
        onChange={(event) => props.notifyChange(event)}
    >
        <option className="status-value"
            value=""

        >
            {props.placeholder}
        </option>

        {
            props.options.map(item => 
                <option className="status-value"
                    value={item.value}
                    key={item.id}
                >
                    {item.value}
                </option>
            )
        }
    </select>
  )
}

export default StatusSelect;