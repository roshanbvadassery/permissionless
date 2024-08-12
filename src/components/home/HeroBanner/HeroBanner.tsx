import { SVGBrandLogo } from "@components/ui/SVGElements";
import Image from "next/image";
import { FC } from "react";
import s from "./HeroBanner.module.scss";

const HeroBanner: FC = () => {
  // useEffect(() => {
  // 	document.body.classList.add('page-loaded');
  // }, []);
  return (
    <div className={`${s.container}`}>
      <div className={s.items}>
        <div className={s.item}>
          <div className={`${s.imageWrapper} ${s.heading1}`}>
            <Image
              src="/images/layout/making.png"
              width={400}
              height={96}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.imageWrapper}>
            <Image
              src="/images/layout/opportunities.png"
              width={470}
              height={80}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
        <SVGBrandLogo className={s.logo} />
        <div className={s.paintDrop}>
          <Image
            src="/images/layout/paint-drop-1.png"
            width={220}
            height={240}
            objectFit="contain"
            alt=""
          />
          <div className={s.drop}>
            <Image
              src="/images/layout/paint-drop-2.png"
              width={200}
              height={230}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
