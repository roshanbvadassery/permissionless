import Image from "next/image";
import { FC, Fragment, useContext } from "react";
import { AppConstant } from "src/constant/AppConstant";
import { MouseContext } from "src/context/mouse-context";
import s from "./SocialConnect.module.scss";

const SocialConnect: FC = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={s.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className={s.headerWrapper} data-aos="slide-up">
              <Image
                src="/images/layout/jacket.png"
                width={300}
                height={400}
                objectFit="contain"
                alt={"Join Us"}
              />
              <span className={s.title}>
                <span>Dont Join Us</span>
              </span>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className={s.socialLinks}>
              {AppConstant.socials.map((item, i) => (
                <Fragment key={i}>
                  <a
                    href={item.url}
                    target="blank"
                    className={`${s.item} ${s[item.name.replace(/\s+/, "")]}`}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                    data-aos="fade-left"
                    data-aos-delay={i * 50}
                  >
                    <div className={s.icon}>
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                        alt={item.name}
                        objectPosition="center"
                        objectFit="contain"
                      />
                    </div>
                    <span className={s.name}>{item.name}</span>
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;
