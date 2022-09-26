// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract CharityApp {
    
    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        owner = msg.sender;
    }

    function transferFunds(address payable _to) external payable {

        require(msg.sender.balance >= msg.value, "Not enough ETH!");
        
        _to.transfer(msg.value);
        // (bool success, ) = _to.call{value: msg.value}("");
        // require(success, "transaction failed");
    }

    function balanceOf(address account) external view returns (uint256) {
        return account.balance;
    }

}