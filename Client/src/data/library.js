const Web3 = require('web3');
const NODE = 'http://192.168.0.102:8545'

const admin_account = '0x1685bdd771b2e66828d7c28afdffd1e7ddf18810'
const admin_password = "abc"

var trainStation_A_Address = '0x45f2eb5ca5123dd7dfc708f7181f4fbd73fd3036'
var trainStation_B_Address = '0x5ab612a4c920610f016c6281bbb577ce0a729b2c'
var trainStation_C_Address = '0x50a1cec928409a5b6673d86499a42fe80142fae7'

const assetABI = {
  "address": "0x72363bd8dc4bb0b64626746ccbb54f2ad5eb37a1",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "adminAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "trainStationAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "int256"
        }
      ],
      "name": "trainStationRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "adminAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "trainAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "int256"
        }
      ],
      "name": "trainRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "trainAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "pressure",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "humidity",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "temperature",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "int256"
        }
      ],
      "name": "trainDataRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "carrierAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "pressure",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "humidity",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "temperature",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "isTrainArrived",
          "type": "int256"
        },
        {
          "indexed": false,
          "name": "isCargoHere",
          "type": "int256"
        }
      ],
      "name": "trainStationDataRegistered",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_trainStationAddress",
          "type": "address"
        },
        {
          "name": "_pressure",
          "type": "int256"
        },
        {
          "name": "_humidity",
          "type": "int256"
        },
        {
          "name": "_temperature",
          "type": "int256"
        },
        {
          "name": "_timestamp",
          "type": "int256"
        },
        {
          "name": "_isTrainArrived",
          "type": "int256"
        },
        {
          "name": "_isCargoHere",
          "type": "int256"
        }
      ],
      "name": "updateTrainStationData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_trainAddress",
          "type": "address"
        },
        {
          "name": "_pressure",
          "type": "int256"
        },
        {
          "name": "_humidity",
          "type": "int256"
        },
        {
          "name": "_temperature",
          "type": "int256"
        },
        {
          "name": "_timestamp",
          "type": "int256"
        }
      ],
      "name": "updateTrainData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}

const provider = new Web3.providers.HttpProvider(NODE);

const web3 = new Web3(provider);


const assetContract = web3.eth.contract(assetABI.abi).at(assetABI.address);


web3.eth.defaultAccount = admin_account

module.exports = {
  web3: web3,
  asset: assetContract,
  admin_account: admin_account,
  admin_password: admin_password
}



function getTrainStationDataHistory() {
  return new Promise((resolve, reject) => {
    assetContract.trainStationDataRegistered({}, {
      fromBlock: web3.eth.blockNumber - 170,
      toBlock: 'latest'
    }).get(function (error, events) {
      if (error) reject(error);
      resolve(events);
    });
  })
}


function getTrainDataHistory() {
  return new Promise((resolve, reject) => {
    assetContract.trainDataRegistered({}, {
      fromBlock: 0,
      toBlock: 'latest'
    }).get(function (error, events) {

      if (error) reject(error);
      resolve(events);
    });
  })
}



module.exports = {
  getTrainDataHistory,
  getTrainStationDataHistory,
}