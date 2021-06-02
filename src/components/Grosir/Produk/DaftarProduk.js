import { Fragment, useState,useEffect, useCallback } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import firebase from "../../../firebase";
import DaftarProdukForm from "./DaftarProdukForm";
import { useWeb3 } from '@openzeppelin/network/react';
import UserService from "../../../services/user.service";
const infuraProjectId = '91f84cfa46204952b3494e93e583e505';

const DaftarProduk = () => {
  const [files, imageFile] = useState( '' );
  const onFileChange = (file) => {
    imageFile(file)
  };

  const handleSubmit = (values) => {
    // var raw = JSON.stringify(values);
    // const formData = new FormData();
    // formData.append('files',this.state.imageFile);
    // formData.append('fileName',this.state.imageFile.name);
    console.log(files)

    // UserService.addBatch(formData).then(
    //   (response) => {
    //     console.log(response)
    //   },
    //   (error) => {
    //   }
    // );
    showResults("Dimasukkan");
  };

  document.getElementById("CDropdownItemNewAccount").style.display = "block";

  const web3Context = useWeb3(`wss://ropsten.infura.io/ws/v3/${infuraProjectId}`);
	const { networkId, networkName, accounts, providerName, lib } = web3Context;
	const requestAuth = async web3Context => {
		try {
			await web3Context.requestAuth();
		} catch (e) {
			console.error(e);
		}
	};
	const requestAccess = useCallback(() => requestAuth(web3Context), []);
  
  const [balance, setBalance] = useState(0);
  const getBalance = useCallback(async () => {
    let balance = accounts && accounts.length > 0 ? lib.utils.fromWei(await lib.eth.getBalance(accounts[0]), 'ether') : 'Unknown';
    setBalance(balance);
  }, [accounts, lib.eth, lib.utils]);

  if(accounts && accounts.length) {
    document.getElementById("CDropdownItemNewAccount").innerHTML = 'Address<br>'+accounts[0] + '<br>Your ETH balance: <br>'+balance;
  } else {
    document.getElementById('CDropdownItemNewAccount').onclick = function(){
      requestAccess();
    }
  }
  
  useEffect(() => {
    getBalance();
  }, [accounts, getBalance, networkId]);

  return (
    <Fragment>
      <DaftarProdukForm onSubmit={handleSubmit} onSelectImage={onFileChange} />
    </Fragment>
  );
};
export default DaftarProduk;