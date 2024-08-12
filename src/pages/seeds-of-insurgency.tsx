import Footer from "@components/seedsofinsurgency/Footer";
import { Layout } from "@components/ui";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Banner, Header, Info } from "../components/seedsofinsurgency";
import { AppConstant } from "../constant/AppConstant";
//Deploy

interface Props {
  audioRef?: any;
}

const SeedsofinsurgencyPage: NextPage<Props> = ({ audioRef }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  //comment

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
      <Header />

      <Banner />
      <Info />

      <Footer />
      {/* {!isPageLoaded && <PageLoader onLoaded={() => setIsPageLoaded(true)} />} */}
    </Layout>
  );
};

export default SeedsofinsurgencyPage;

//Deploy
