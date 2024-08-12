import { SVGBrandLogo } from "@components/ui/SVGElements";
import { Input } from "antd";
import Image from "next/image";
import s from "./Occ.module.scss";

const Occ = () => {
  return (
    <div className={`${s.container}`}>
      <SVGBrandLogo className={s.logo} />
      <p className={`${s.chain}`}>
        OnChain<span className={`${s.corporation}`}>Corporation</span>
      </p>
      <span className={`${s.textabove}`}>
        Don’t Setup your Digital Company, you might become successful
      </span>
      <div className={`${s.inputwrap}`}>
        <Input
          className={`${s.inputOcc}`}
          placeholder="Enter a name for it..."
          //   value=".occ"
        />
        <span className={`${s.occ}`}>.occ</span>
      </div>
      <span className={`${s.textbelow}`}>
        Don’t worry a lot about it, Google was initially caled Backrub.
      </span>
      <div className={`${s.logowrap}`}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={277.93}
          height={326.02}
        />
      </div>
    </div>
  );
};

export default Occ;
