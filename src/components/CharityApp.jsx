import React, { useState, useEffect } from 'react';
import CharityList from './CharityList';
import Recipient from './Recipient';
import AmountInput from './AmountInput';
import DonateButton from './DonateButton';
import styles from '../styles/CharityApp.module.css';

const CharityApp = (props) => {

    const [recipient, setRecipient] = useState([]);
    const [amountToDonate, setAmountToDonate] = useState(0);

    const updateRecipient = (newRecipient, newAddress, newBalance) => {
        setRecipient([newRecipient, newAddress, newBalance]);
    }

    const updateAmountToDonate = (newAmount) => {
        setAmountToDonate(newAmount);
    }

    const updateRecipientBalance = (newBalance) => {

        setRecipient([recipient[0], recipient[1], newBalance]);
    }

    return (
        <div className={styles.charityAppContainer}>
            <div className={styles.elementsContainer}>
                <CharityList updateRecipient={updateRecipient} />
                <br />
                <Recipient recipient={recipient} />
                <AmountInput updateAmountToDonate={updateAmountToDonate} />
                <br />
                <DonateButton 
                    recipientAddress={recipient[1]} 
                    amountToDonate={amountToDonate}
                    currentAccount={props.currentAccount} 
                    updateRecipientBalance={updateRecipientBalance}
                />
            </div>
        </div>
    );
}

export default CharityApp;