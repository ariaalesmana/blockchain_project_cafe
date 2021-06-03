export const AddProduct = [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "product_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "batch_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "biji_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "jenis_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "proses_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "asal",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "volume",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tgl_panen",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tgl_proses",
          "type": "string"
        }
      ],
      "name": "addProducts",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "product_id",
          "type": "uint256"
        }
      ],
      "name": "getProductsByProductId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "batch_id",
          "type": "uint256"
        }
      ],
      "name": "getProductsByBatchId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
]