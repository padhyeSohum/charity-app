import React from 'react';

const AmountInput = (props) => {

    const handleChange = (e) => {
        props.updateAmountToDonate(e);
    }

    return (
        <div>
            <p>Enter donation amount (ETH)</p>
            <input type="number"
                min="0.001"
                step="0.001"
                onChange={(e) => {handleChange(e.target.value)}}
            />
        </div>
    );
}

export default AmountInput;