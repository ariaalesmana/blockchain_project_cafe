import { Fragment, useState,useEffect, useCallback } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarProdukForm from "./DaftarProdukForm";
import { useWeb3 } from '@openzeppelin/network/react';
import UserService from "../../../services/user.service";
import Web3 from "web3";
import { AddProduct } from "../../../abi/abi";

require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const DaftarProduk = () => {
  const [files, imageFile] = useState( '' );
  const [filesGambar, imageFileGambar] = useState( '' );
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState( '' );

  const provider = new HDWalletProvider(process.env.REACT_APP_MNEMONIC,'https://ropsten.infura.io/v3/'+process.env.REACT_APP_INFURA_PROJECT_ID);
  const web3 = new Web3(provider);
  const contractAddress = "0xEb8eF83cB027D9d3594b77eCd05051E138741e5B";

  const onFileChange = (file) => {
    imageFile(file)
  };

  const onFileChangeGambar = (file) => {
    imageFileGambar(file)
  };

  const getWallet = async () => {
    web3.eth.getAccounts(function(err, accounts){
        if (err != null) {
          alert("An error occurred: "+err);
        } else if (accounts.length == 0) {
          alert("User is not logged in to MetaMask");
        } else {
          setAccount(accounts[0])
        }
    });
  };

  const handleSubmit = async (values) => {
    // var raw = JSON.stringify(values);
    const formData = new FormData();
    formData.append('batch_id',values.batch_id);
    formData.append('name',values.name);
    formData.append('category',values.category);
    formData.append('subcategory',values.subcategory);
    formData.append('description',values.description);
    formData.append('short_description',values.short_description);
    formData.append('price',values.price);
    formData.append('unit',values.unit);
    formData.append('stock',values.stock);
    formData.append('sku',values.sku);
    formData.append('vendor_sku',values.vendor_sku);
    formData.append('weight',values.weight);
    formData.append('tgl_produksi',values.tgl_produksi);
    formData.append('files',files);
    formData.append('fileName',files.name);
    formData.append('files_gambar',filesGambar);
    formData.append('fileName_gambar',filesGambar.name);

    UserService.addProduct(formData).then(
      async (response) => {
        const storageContract = new web3.eth.Contract(AddProduct, contractAddress);
        const gas = await storageContract.methods.addProducts(response.data.product.id, response.data.batch.id, response.data.batch.biji_id, response.data.batch.jenis_id, response.data.batch.proses_id, response.data.batch.supplier_id, response.data.batch.volume, response.data.batch.tgl_panen, response.data.product.tgl_produksi).estimateGas();
        var post = await storageContract.methods.addProducts(response.data.product.id, response.data.batch.id, response.data.batch.biji_id, response.data.batch.jenis_id, response.data.batch.proses_id, response.data.batch.supplier_id, response.data.batch.volume, response.data.batch.tgl_panen, response.data.product.tgl_produksi).send({
          from: account,
          gas,
        }, (error, transactionHash) => {
          console.log(transactionHash);
        });
        console.log(post);
        showResults("Dimasukkan");
      },
      (error) => {
      }
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  // document.getElementById("CDropdownItemNewAccount").style.display = "block";

  // const web3Context = useWeb3(`wss://ropsten.infura.io/ws/v3/${infuraProjectId}`);
	// const { networkId, networkName, accounts, providerName, lib } = web3Context;
	// const requestAuth = async web3Context => {
	// 	try {
	// 		await web3Context.requestAuth();
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };
	// const requestAccess = useCallback(() => requestAuth(web3Context), []);
  
  // const getBalance = useCallback(async () => {
  //   let balance = accounts && accounts.length > 0 ? lib.utils.fromWei(await lib.eth.getBalance(accounts[0]), 'ether') : 'Unknown';
  //   setBalance(balance);
  // }, [accounts, lib.eth, lib.utils]);

  // if(accounts && accounts.length) {
  //   document.getElementById("CDropdownItemNewAccount").innerHTML = 'Address<br>'+accounts[0] + '<br>Your ETH balance: <br>'+balance;
  // } else {
  //   document.getElementById('CDropdownItemNewAccount').onclick = function(){
  //     requestAccess();
  //   }
  // }
  
  // useEffect(() => {
  //   getBalance();
  // }, [accounts, getBalance, networkId]);

  return (
    <Fragment>
      <DaftarProdukForm onSubmit={handleSubmit} onSelectImage={onFileChange} onSelectImageGambar={onFileChangeGambar} />
    </Fragment>
  );
};
export default DaftarProduk;