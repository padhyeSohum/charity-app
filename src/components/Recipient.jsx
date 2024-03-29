import React, { useEffect } from 'react';
import Web3 from 'web3';

const web3 = Web3;

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