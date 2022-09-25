import React, { useEffect } from 'react';

const Recipient = (props) => {


    return (
        <div>
            <p>Recipient: {props.recipient[0]}</p>
            <p>Address: {props.recipient[1]}</p>
            <p>Balance: {parseInt(props.recipient[2], 16) / 10**18}</p>
        </div>
    )
}

export default Recipient;