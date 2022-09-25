const { task } = require("hardhat/config");
const web3 = require('web3');
require('dotenv').config();


require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
    .addParam("account", "The account's address")
    .setAction(async taskArgs => {
        const account = web3.utils.toChecksumAddress(taskArgs.account);

        console.log(account)

        const balance = await web3.eth.getBalance(account);

        console.log(web3.utils.fromWei(balance, "ether"), "ETH");
    })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
        url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        accounts: [process.env.GOERLI_PRIVATE_KEY]
    }
  }
};
