import { FC } from "react";
import { AppConstant } from "src/constant/AppConstant";
import s from "./Info.module.scss";

const Info: FC = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.left}>
          <p>{AppConstant.info.left[0]}</p>
        </div>
        <div className={s.right}>
          {AppConstant.info.right.map((i, index) => {
            return (
              <div key={index} className={s.rightText}>
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Info;
