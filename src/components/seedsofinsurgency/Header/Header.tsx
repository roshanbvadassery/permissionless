import { FollowUsCampaign } from "@components/common";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { SVGBrandLogo } from "../../ui/SVGElements";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.logo}>
          <Image src="/images/logo.svg" alt="logo" layout="fill" />
        </div>
        <div className={s.brandLogo}>
          <Link href="/">
            <a>
              <SVGBrandLogo />
            </a>
          </Link>
        </div>
        <div className={s.walletConnect}>
          <FollowUsCampaign />
        </div>
      </div>
    </>
  );
};

export default Header;
