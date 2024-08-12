import { notification } from "antd";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
// import { useUserActions } from "src/_actions/user.actions";
import { authAtom } from "src/_state";
import Web3 from "web3";
import s from "./ConnectWallet.module.scss";

import { useUserActions } from "src/_actions/user.actions";

const ConnectWallet: FC = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [adress, setwalletAdress] = useState("");
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isSpinner, setSpinner] = useState(false);
  const [notificationType, setNotificationType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [windoweth, setWindoweth] = useState<any>(null);

  const auth = useRecoilValue(authAtom);
  const userActions = useUserActions();
  const validChainId = 1;

  useEffect(() => {
    if (window && typeof window.ethereum !== "undefined") {
      setWindoweth(window.ethereum);
    }
  }, []);

  const metaMaskConnect = async () => {
    if (isWalletConnected || !isValidNetwork()) {
      return;
    }
    if (!windoweth) {
      notification.error({ message: "Please install MetaMask" });
      return;
    }
    try {
      setIsLoading(true);
      const ethereum = windoweth;
      const address: string = (
        await ethereum.request({
          method: "eth_requestAccounts",
        })
      )[0].toLowerCase();
      setWalletConnected(true);

      userActions.updateAuth({ address });
    } catch (error) {
      setIsLoading(false);
      setWalletConnected(false);
    }
  };

  useEffect(() => {
    const eth: any = window.ethereum;
    if (!eth) {
      return;
    }
    // if (!AppConfig.isDevelopment) {
    // handleEthereum(eth);
    // }
  }, []);

  const handleEthereum = (eth: any) => {
    setTimeout(() => {
      if (eth && eth.networkVersion != validChainId) {
        setNotificationType("networkMissmatch");
      }
    }, 1000);
    window.ethereum.on("networkChanged", function (networkId: number) {
      if (validChainId != networkId) {
        setNotificationType("networkMissmatch");
        userActions.logout();
      } else {
        setNotificationType("");
      }
    });
  };

  const isValidNetwork = () => {
    // if (notificationType === "networkMissmatch") {
    //   const networkList: any = AppConfig.networkList;
    //   notification.error({
    //     message: `Switch To ${networkList[validChainId].name} Network`,
    //     key: "wallet-connect",
    //   });
    //   return false;
    // }

    return true;
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(auth?.address as any);
    notification.success({ message: "Copied", key: "copy_wallet" });
  };
  return (
    <>
      {!auth?.address && (
        <div className={`btnWrapper`} onClick={metaMaskConnect}>
          <div className={`p-btn outline ${s.walletbtn}`}>Connect Wallet</div>
        </div>
      )}

      {/* {auth?.address && (
        <div className={`btnWrapper`}>
          <div className={`btn-primary ${s.walletbtn}`}>
            <div className={s.address}>
              {auth?.address &&
                auth.address.slice(0, 6) + "..." + auth.address.slice(-4)}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ConnectWallet;
