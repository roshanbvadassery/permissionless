/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { FC, useContext } from "react";
import { MouseContext } from "src/context/mouse-context";
import s from "./ContactUs.module.scss";

const ContactUs: FC = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={s.container}>
      <div className={s.thumbnailWrapper} data-aos="fade-up">
        <Image
          src="/images/layout/mobile.png"
          width={520}
          height={600}
          alt=""
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className={s.titleWrapper}>
        <img
          className={`${s.title} desktop-only`}
          src="/images/layout/dont-contact-us-text.svg"
          alt=""
          data-aos="fade-up"
        />
        <img
          className={`${s.title} mobile-only`}
          src="/images/layout/dont-contact-us-mobile.svg"
          alt=""
          data-aos="fade-up"
        />
        
      </div>
    </div>
  );
};

export default ContactUs;
