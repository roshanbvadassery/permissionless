import { FollowUsCampaign } from "@components/common";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { authAtom } from "src/_state";
import s from "./Banner.module.scss";

const Banner = () => {
  const auth = useRecoilValue(authAtom);

  return (
    <div className={s.container}>
      <div className="container">
        <span className={s.smallText}>GLOBAL CHALLENGES</span>
        <p className={s.headline}>Join us in solving the worlds most pressing problems</p>
        <div className={s.imgWrapper}>
          <Image
            src="/images/layout/nftBanner2.jpg"
            alt="nftBanner"
            objectFit="contain"
            objectPosition="center"
            layout="fill"
            quality={100}
          />
        </div>
        <div className={s.walletConnect}>
          {/* <WalletConnect /> */}

          {!auth?.whitelisted && <FollowUsCampaign />}
        </div>
        {/* Changes */}
      </div>
      {auth?.whitelisted && (
        <p className={s.alreadyWhitelisted}>
          You are whitelisted, spread the word.
        </p>
      )}
    </div>
  );
};

export default Banner;
