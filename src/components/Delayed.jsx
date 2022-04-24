import React, { useEffect, useState } from 'react';

function Delayed(props) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, props.delay);
    }, []);

    return (
        isVisible? props.children : null
    )
}

export default Delayed;