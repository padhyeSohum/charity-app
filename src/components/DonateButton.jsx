import React, { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import styles from '../styles/DonateButton.module.css';
import Web3 from 'web3';
import CharityApp from '../CharityApp.sol/CharityApp.json'

const DonateButton = (props) => {

    const [transactionStatus, setTransactionStatus] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [userBalance, setUserBalance] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const CONTRACT_ADDRESS = '0x2bA21Ced1880F825e2D0320a015Fbb8898CD748e';

    const { ethereum } = window;

    const donateFunds = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CharityApp.abi, signer);
                
                let donateTxn = await connectedContract.transferFunds(props.recipientAddress, {
                    value: (props.amountToDonate * 10**18).toString()
                })

                await donateTxn.wait();
                setTransactionStatus('Transaction successful! Thank you for your donation!');

                ethereum.request({ method: 'eth_getBalance', params: [props.recipientAddress, 'latest'] })
                .then(
                    (balance) => {
                        props.updateRecipientBalance(balance);
                    }
                )

                setTimeout(() => { setTransactionStatus('') }, 5000);

            }
        }
        catch (err) {
            console.log(err);
            setTransactionStatus(err.message);
        }
    }

    const callToSetIsDisabled = useCallback(
        () => {
            toSetIsDisabled();
        },
        [props.recipientAddress, props.amountToDonate]
    );

    const toSetIsDisabled = () => {

        getUserBalance();

        setIsDisabled(true);

        if (props.recipientAddress && props.amountToDonate > 0 && parseFloat(props.amountToDonate) + 0.0001 < parseFloat(parseInt(userBalance, 16) / 10**18)) {
            setIsDisabled(false);
            setErrorMessage('');
        }

        else if (!props.recipientAddress) {
            // setIsDisabled(true);
            setErrorMessage('Please choose a charity to donate to.');
        }

        else if (props.amountToDonate <= 0) {
            // setIsDisabled(true);
            setErrorMessage('Donation amount should be greater than 0.');
        }

        else {
            // setIsDisabled(true);
            setErrorMessage('Insufficient funds in wallet.');
        }
    }

    const getUserBalance = () => {
        ethereum.request({ method: 'eth_getBalance', params: [props.currentAccount, 'latest'] })
        .then(
            (balance) => {
                setUserBalance(balance);
            }
        )
    }

    return (
        <div className={styles.donateButtonContainer}>
            <button className={styles.donateButton} ref={callToSetIsDisabled} onClick={async () => {await donateFunds()}} disabled={isDisabled}>
                Donate
            </button>
            <br />
            <div>{transactionStatus}</div>
            <br />
            <div className={styles.errorMessageText}>{errorMessage}</div>
        </div>
    )
}

export default DonateButton;