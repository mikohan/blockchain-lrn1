// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "guard strategy island borrow muscle ready neck home alien faint someone bus",
  "https://rinkeby.infura.io/v3/6bf0af44eba24c25b73f2fd526535efd"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from accounts", accounts[0]);

  result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to ", result.options.address);
  provider.engine.stop();
};
deploy();
