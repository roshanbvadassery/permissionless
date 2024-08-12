import SpaceShipPage from "@components/SpaceShipPageNew";
import { Layout } from "@components/ui";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { AppConstant } from "../constant/AppConstant";

interface Props {
  audioRef?: any;
}

const SpaceShip: NextPage<Props> = ({ audioRef }) => {
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  return (
    <Layout>
      <>
        <audio ref={audioRef} id="audio" src="/bgMusic.mp3"></audio>
      </>
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <SpaceShipPage />
    </Layout>
  );
};

export default SpaceShip;

//Deploy
