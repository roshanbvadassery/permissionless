import Image from "next/image";
import { FC } from "react";
import s from "./WhoAreWe.module.scss";

const WhoAreWe: FC = () => {
  return (
    <div className={`${s.container} who-we-are-main`} data-aos="who-we-are">
      <div className={s.team}>
        <div
          className={s.thumnailWrapper}
          data-aos="fade-in"
          data-aos-delay="0"
          data-aos-anchor=".who-we-are-main"
        >
          <Image
            src="/images/layout/team01.jpg"
            width={1300}
            height={770}
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${s.titleWrapper} titleWrapper`}>
          {Array(4)
            .fill("WHO ARE WE")
            .map((item, i) => (
              <span className={`${s.title} title blockRevealer`} key={i}>
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="container">
        <div className={`${s.intro} who-are-we-intro`}>
          <span data-aos="fade-up" data-aos-anchor=".who-are-we-intro">
            {`We are everywhere.`}
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-anchor=".who-are-we-intro"
          >
            We want to build a new world, with you in the middle.
            <br /> Self, Sovereign, Custodian.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor=".who-are-we-intro"
          >
            {`Also, we speak satire, house & techno.`}
          </span>
        </div>
        <div className={s.details}>
          <div className="row">
            <div className="col-md-6">
              <p data-aos="fade-up">
                Permissionless is committed to build public infrastructure for
                the new web. We advocate technology as a medium for solving
                the most complex problems of mankind. Annoyed that instead of
                using this to enable various efficient trustless
                systems with open access, profit making become the main focus. We would
                like to change that, now.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <span className={s.quote}>
                “The Internet is freedom from the limitations of land.”
              </span>
              {/* <p>
                Eu viverra morbi nec enim. Amet integer lobortis vitae velit id
                tincidunt. Nulla pellentesque aliquet at volutpat. Ut tortor
                est, at blandit et pellentesque. Urna ut nulla leo vel
                suspendisse id platea id lorem.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
