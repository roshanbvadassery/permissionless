import Image from "next/image";
import s from "./SpaceShipPage.module.scss";
const SpaceShipPage = () => {
  return (
    <div className={s.container}>
      <div className={`${s.leftWrap}`}>
        <div className={`${s.logoWrapper}`}>
          <Image
            src="/images/spaceship-logo.svg"
            alt="spaceship-logo"
            objectFit="contain"
            width={175}
            height={55}
          />
        </div>
        <span className={s.tagline}>
          Uniting
          <br /> Problem <br /> Solvers
        </span>
        <div className={`${s.iconRow}`}>
          <div className={`${s.plusIcon}`}>
            <Image
              src="/images/plus.svg"
              alt="spaceship-logo"
              objectFit="contain"
              width={40}
              height={40}
            />
          </div>
          <div className={`${s.xIcon}`}>
            <Image
              src="/images/x.svg"
              alt="spaceship-logo"
              objectFit="contain"
              width={40}
              height={40}
            />
          </div>
          <div className={`${s.plusIcon}`}>
            <Image
              src="/images/plus.svg"
              alt="spaceship-logo"
              objectFit="contain"
              width={40}
              height={40}
            />
          </div>

          <div className={`${s.xIcon}`}>
            <Image
              src="/images/x.svg"
              alt="spaceship-logo"
              objectFit="contain"
              width={40}
              height={40}
            />
          </div>
          <div className={`${s.plusIcon}`}>
            <Image
              src="/images/plus.svg"
              alt="spaceship-logo"
              objectFit="contain"
              width={40}
              height={40}
            />
          </div>
          <div className={`${s.xIcon}`}>
            <Image
              src="/images/x.svg"
              alt="spaceship-logo"
              objectFit="contain"
              width={40}
              height={40}
            />
          </div>

          {/* <Image
            src="/images/x-icons.svg"
            alt="spaceship-logo"
            objectFit="contain"
            width={470}
            height={50}
          /> */}
        </div>
        <p className={s.desc}>
          Mi diam malesuada sagittis quisque varius. Auctor et ultrices et
          tellus sociis feugiat. Luctus vitae habitant libero, faucibus cum
          scelerisque aliquet quam non. Dui a, duis mollis vel viverra.
        </p>
        <p className={`${s.desc} ${s.desc2}`}>
          Tellus nisi id fermentum non id. Fermentum volutpat neque faucibus
          nullam tellus aliquam. Enim faucibus ut orci at leo turpis nisl,
          aliquet tristique. Varius nisi, pellentesque consectetur libero.
        </p>
        <div className={`${s.list}`}>
          <ul>
            <li>Token Sale</li>
            <li className={s.lightText}>X</li>
            <li>Sales Expertise</li>
            <li className={s.lightText}>X</li>
            <li>Design Expertise</li>
            <li className={s.lightText}>X</li>
            <li>Product Guidance</li>
            <li className={s.lightText}>X</li>
            <li>Marketing Assistance</li>
          </ul>
        </div>
        <div className={`${s.about}`}>
          <p className={s.question}>What is Spaceship</p>
          {/* <p className={`${s.desc} ${s.answer}`}>
            Tellus nisi id fermentum non id. Fermentum volutpat neque faucibus
            nullam tellus aliquam. Enim faucibus ut orci at leo turpis nisl,
            aliquet tristique. Varius nisi, pellentesque consectetur libero.
          </p> */}
          <p className={s.question}>Who are We</p>
          <p className={`${s.desc} ${s.answer}`}>
            Tellus nisi id fermentum non id. Fermentum volutpat neque faucibus
            nullam tellus aliquam. Enim faucibus ut orci at leo turpis nisl,
            aliquet tristique. Varius nisi, pellentesque consectetur libero.
          </p>
        </div>
      </div>
      <div className={`${s.rightWrap}`}>
        <div className={`${s.rocketImg}`}>
          <Image
            src="/images/rocket.png"
            alt="spaceship-logo"
            objectFit="contain"
            width={843}
            height={982}
          />
        </div>
        <a href="#">
          <div className={s.joinNowBtn}>
            <p>+ join us</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SpaceShipPage;
