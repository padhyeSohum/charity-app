import React, { useState } from 'react';
import styles from '../styles/CharityList.module.css';

const CharityList = (props) => {

    const recipientList = [{name: 'UNICEF', address: '0x32D18373A1E2aBBB2b27D446f69F611Ad436F722'}, {name: 'United Ways', address: '0xc52595635e24B50Cc3942d69684fC7dc480f01be'}, {name: 'SickKids', address: '0x1727A1C5De4822A4B560012C2ACa764F528a00F9'}];
    
    const itemClickHandler = (e, address) => {
        ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] })
        .then(
            (balance) => {
                props.updateRecipient(e.target.innerHTML, address, balance);
            }
        )
    }

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdownBtn}>Choose a charity to donate to.</button>
            <div className={styles.dropdownContent}>

                {recipientList.map((item, index) => (
                    <div key={index}>
                        <p className={styles.listItem} onClick={(e) => {itemClickHandler(e, item.address)}}>{item.name}</p>
                    </div>
                ))}

            </div>
        </div>
    );
    
}

export default CharityList;