import { gsap } from "gsap";
import Image from "next/image";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { MouseContext } from "src/context/mouse-context";
import s from "./SpaceShipOverlayPage.module.scss";
interface Props {
  onLoaded?: any;
  audioRef?: any;
  audioControl?: any;
}

const SpaceShipOverlayPage: FC<Props> = ({
  onLoaded,
  audioRef,
  audioControl,
}) => {
  const [loading, setLoading] = useState(0);
  const { cursorChangeHandler } = useContext(MouseContext);
  let timer: number | null | undefined = null;

  const commonRef: any = useRef({});
  const rocketRef: any = useRef({});

  useEffect(() => {
    gsap.fromTo(
      commonRef.current["defaultScreen"],
      {
        opacity: 0,
      },
      { opacity: 1, scale: 1 }
    );
    return () => {
      if (!timer) {
        return;
      }
      window.clearInterval(timer);
    };
  }, []);

  const startTimer = () => {
    timer = window.setInterval(() => {
      setLoading((prevState) => {
        if (prevState >= 100) {
          return prevState;
        }
        return prevState + 1;
      });
    }, 2);
  };

  useEffect(() => {
    if (!loading) {
      return;
    }
    if (loading === 100) {
      setTimeout(() => {
        document.body.classList.add("page-loaded");
        onLoaded();
      }, 600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const onAction = () => {
    setLoading(1);

    setTimeout(() => {
      initAnimation();
      startTimer();
    }, 100);
  };

  const welcomeMessage = () => {
    const message = "Congratulations, now you are officially";
    return message.split("").map((item, i) => {
      return <span key={i}>{item}</span>;
    });
  };

  const initAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      rocketRef.current,
      {
        y: 0,
      },
      { y: -700 }
    );
    // tl.from(commonRef.current["welcomeMessage"].children, {
    //   duration: 0.8,
    //   opacity: 0,
    //   scale: 0,
    //   y: 80,
    //   rotationX: 180,
    //   transformOrigin: "0% 50% -50",
    //   ease: "back",
    //   stagger: 0.01,
    // }).fromTo(
    //   commonRef.current["brandLogo"],
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //   },
    //   "-=.5"
    // );
  };

  return (
    <div className={`${s.container} ${loading === 100 ? s.loaded : ""}`}>
      {/* <iframe
        width="1550"
        height="1000"
        src="https://www.youtube.com/embed/S7qaGtYKU-c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowfullscreen:true
      ></iframe> */}
      {/* <video
        className={s.video}
        muted
        autoPlay
        loop
        width="1550"
        height="1000"
        src="https://res.cloudinary.com/drivesfnofficial/video/upload/v1665584533/Async-Gist/videoplayback_klcn0k.mp4"
      /> */}
      {/* <video
        className={`${s.video} ${s.mobvid} ${s.top}`}
        muted
        autoPlay
        loop
        // width="500"
        // height="750"
        src="https://res.cloudinary.com/drivesfnofficial/video/upload/v1665584533/Async-Gist/videoplayback_klcn0k.mp4"
      /> */}
      {/* <video
        className={`${s.video} ${s.mobvid} ${s.bottom}`}
        muted
        autoPlay
        loop
        // width="500"
        // height="775"
        src="https://res.cloudinary.com/drivesfnofficial/video/upload/v1665584533/Async-Gist/videoplayback_klcn0k.mp4"
      /> */}
      <div
        className={`${s.defaultScreen} ${loading !== 0 ? s.loaded : ""}`}
        ref={(el: any) => (commonRef.current["defaultScreen"] = el)}
      >
        {/* <DontSendText className={`${s.bgText}  desktop-only`} /> */}
        {/* <div className={`${s.bgText} ${s.mobile} mobile-only`} /> */}
        {/* <ParticleEffectButton color="#000000" hidden={loading === 1}>
          <div
            onClick={() => {
              onAction();
              audioControl();
            }}
            className={`p-btn ${s.startAction}`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            {`LET'S LAUNCH`}
          </div>
        </ParticleEffectButton> */}
        {/* <Link href="https://www.youtube.com/watch?v=S7qaGtYKU-c">
          <a target="_blank" className={s.podcast}>
            <div className={`${s.text}  ${loading > 1 ? s.loaded : ""}`}>
              <i className="fas fa-play"></i>
              {` we have a podcast as well, Don’t watch it.`}
            </div>
          </a>
        </Link> */}
      </div>

      <div
        className={s.spaceShipRocket}
        ref={rocketRef}
        onClick={() => {
          onAction();
          audioControl();
        }}
      >
              <p className="text-white">tap rocket to take off</p>

        <Image
          src="/images/layout/rocket-spaceship.png"
          width={100}
          height={100}
        />
      </div>

      {/* <div className={`${s.loadingScreen} ${loading > 1 ? s.loaded : ""}`}>
        <div className={s.intro}>
          <span
            className={s.message}
            ref={(el: any) => (commonRef.current["welcomeMessage"] = el)}
          >
            {welcomeMessage()}
          </span>{" "}
          <SVGBrandLogo
            className={s.logo}
            ref={(el: any) => (commonRef.current["brandLogo"] = el)}
          />
        </div>
        <div
          className={`${s.progress} ${loading > 2 ? s.loaded : ""}`}
          // style={{ transform: `translateX(${loading - 100}%)` }}
        />
        <span className={s.progressPercent}>{loading}%</span>
      </div> */}
    </div>
  );
};

export default SpaceShipOverlayPage;
