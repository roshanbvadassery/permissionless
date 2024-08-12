import { Modal, notification } from "antd";
import { FC, useContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useUserActions } from "src/_actions/user.actions";
import { authAtom } from "src/_state";
import { MouseContext } from "src/context/mouse-context";
import s from "./FollowUsCampaign.module.scss";

const FollowUsCampaign: FC = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [isFollowActive, setFollowActive] = useState(false);
  const [stepsCompleted, setStepsCompleted] = useState<string[]>([]);
  const [loadingState, setLoadingState] = useState<string | null>(null);

  const userActions = useUserActions();
  const auth = useRecoilValue(authAtom);

  const updateUserData = async () => {
    const userData = {
      wallet: auth?.address,
      status: true,
    };

    try {
      setLoadingState("loading");
      await userActions.whitelistUser(userData);
      notification.success({
        message: "Successfully whitelisted",
        key: "whitelisted",
      });
      userActions.updateAuth({ whitelisted: true });
    } catch (error) {
      notification.error({
        message: "Error occured in whitelisting",
        key: "whitelisted-error",
      });
    } finally {
      setLoadingState(null);
      setFollowActive(false);
    }
  };

  useEffect(() => {
    if (stepsCompleted.length == 2) {
      userActions.updateAuth({ campaignWhitelist: [...stepsCompleted] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepsCompleted]);

  useEffect(() => {
    if (!window) {
      return;
    }

    window.onGleamEvent = function (event: any) {
      if (event.type != "entered") {
        return;
      }
      const title = event.action.title;
      setStepsCompleted((item) => {
        return [...item, title];
      });
    };
  }, []);

  useEffect(() => {
    if (isFollowActive) {
      const embedCode =
        '<a class="e-widget no-button generic-loader" href="https://gleam.io/bSbIJ/permissionless-nft-whitelist" rel="nofollow">Permissionless NFT Whitelist</a><script type="text/javascript" src="https://widget.gleamjs.io/e.js" async="true"></script>';
      setTimeout(() => {
        embedScript(document.querySelector("#gleam_competition"), embedCode);
      }, 500);
    }
  }, [isFollowActive]);

  useEffect(() => {
    if (auth?.address && !auth.whitelisted) {
      updateUserData();
    }
  }, [auth]);

  const embedScript = (el: any, html: any) => {
    if (!el) {
      return;
    }
    el.innerHTML = html;

    Array.from(el.querySelectorAll("script")).forEach((oldScript: any) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr: any) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  };

  return (
    <>
      {/* <Link href="" target="_blank">
        <a
          href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/67432743338810530679820035390610758688642630476472665463290246249651107796403"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={`p-btn  ${s.action}`}
            // onMouseEnter={() => cursorChangeHandler("hovered")}
            // onMouseLeave={() => cursorChangeHandler("")}
            // onClick={() => setFollowActive(true)}
          >
            {" "}
            View on Opensea
          </div>
        </a>
      </Link> */}

      <Modal
        visible={isFollowActive}
        onCancel={() => setFollowActive(false)}
        footer={null}
        className="follow-us-compaign"
      >
        {/* {auth?.whitelisted && (
          <p className={s.alreadyWhitelisted}>
            You are whitelisted, spread the word.
          </p>
        )}
        {auth?.campaignWhitelist.length == 4 && (
          <div className={s.connectWallet}>
            {!auth.address && <ConnectWallet />}
            {loadingState == "loading" && <Spin size="large" />}
          </div>
        )}
        {auth?.campaignWhitelist.length != 4 && (
         
        )} */}
        <div className={s.modalContent} id="gleam_competition" />
      </Modal>
    </>
  );
};

export default FollowUsCampaign;
