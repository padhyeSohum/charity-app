import ethers from 'ethers';
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CharityApp from './CharityApp';

const App = () => {

    const [walletIsConnected, setWalletIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);


    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        ethereum.request({ method: 'eth_accounts' })
        .then(handleAccountsChanged);
    }

    const handleAccountsChanged = (accounts) => {
        // console.log(accounts);

        if (accounts.length === 0) {
            setWalletIsConnected(false);
            connectWallet();
        } 
        else if (accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0]);
            setWalletIsConnected(true);
        }
    }

    const connectWallet = async () => {
        const { ethereum } = window;

        if (ethereum) {

            ethereum.request({method: 'eth_requestAccounts'})
            .then(handleAccountsChanged);

        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <div>
            {walletIsConnected && <CharityApp currentAccount={currentAccount}/>}
        </div>
    );
}

export default App;