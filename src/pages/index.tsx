import { DontMint, PageLoader } from "@components/common";
import {
  ContactUs,
  HeroBanner,
  OurWork,
  SocialConnect,
  WhoAreWe,
} from "@components/home";
import { Footer, Header, Layout } from "@components/ui";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { AppConstant } from "../constant/AppConstant";

const Home: NextPage = () => {
  const audioRef = useRef<any>(null);

  const audioControl = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    // document.body.classList.add("page-loaded");
  }, []);

  //Deploy 2

  return (
    <Layout>
      <>
        <audio ref={audioRef} id="audio" src="/bgMusic.mp3"></audio>
      </>
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header audioControl={audioControl} />
      {!isPageLoaded && (
        <PageLoader
          onLoaded={() => setIsPageLoaded(true)}
          audioRef={audioRef}
          audioControl={() => {
            audioControl();
          }}
        />
      )}

      <HeroBanner />
      <DontMint />
      <WhoAreWe />
      <OurWork />
      <SocialConnect />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default Home;
