/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FC, useEffect } from "react";
import { SVGBrandLogo } from "../SVGElements";
import s from "./Header.module.scss";

interface Props {
  audioRef?: any;
  audioControl?: any;
}

const Header: FC<Props> = ({ audioRef, audioControl }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        document.body.classList.add("page-scrolled");
        return;
      }
      document.body.classList.remove("page-scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={s.container}>
      <div className="container">
        <div className={s.content}>
          <Link href="/">
            <a
              className={`${s.logo} desktop-only`}
              onClick={() => {
                audioControl();
                console.log("Here");
              }}
            >
              <img src="/images/logo.svg" alt="" />
            </a>
          </Link>
          <Link href="/" onClick={audioControl}>
            <div
              onClick={() => {
                audioControl();
                console.log("Here");
              }}
            >
              <SVGBrandLogo className={s.logo} />
            </div>
          </Link>
          <div>{/* <FollowUsCampaign /> */}</div>
      </div>
      </div>
    </div>
  );
};

export default Header;
