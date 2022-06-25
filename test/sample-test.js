const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

describe("Charity App", function() {
    it("Should send the money to the contract, then to the recipient", async function () {
        const CharityApp = await ethers.getContractFactory("CharityApp");
        const charityApp = await CharityApp.deploy();

        console.log("deployed successfully");

        const senderToContractTx = await charityApp.senderToContract();
        await senderToContractTx.wait();

        console.log('sent money to contract')

        const contractToReceiverTx = await charityApp.contractToReceiver('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
        await contractToReceiverTx.wait();

        console.log('sent money from contract to receiver');
        // const receiverBalance = await charityApp.balanceOf('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
        // console.log(receiverBalance);

    });
});