import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import { MouseContext } from "src/context/mouse-context";
import s from "./DontMint.module.scss";

interface Props {
  audioRef?: any;
}

const DontMint: FC<Props> = ({ audioRef }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={s.container}>
      <div className="container">
        <div className={s.content}>
          <span className={s.title} data-aos="fade-up">
            Advancing Humanity,
            <br /> Almost a state.
          </span>
          <div className={s.thumbnailWrapper} data-aos="fade-in">
            <Image
              src={"/images/layout/dont-mint.png"}
              width={400}
              height={400}
              objectFit="contain"
              objectPosition="center"
              alt=""
            />
          </div>
          <div>
            <Link href="/why">
              <a
                data-aos="fade-up"
                className={`p-btn p-btn-bordered ${s.action}`}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                our mission
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMint;
