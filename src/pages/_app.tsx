import "antd/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import MouseContextProvider from "src/context/mouse-context";
import "/styles/theme.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true, anchorPlacement: "top-center" });
    AOS.refresh();
    console.log("AOS Iniit");
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2799Z0Q44Z`}
      />

      <Script strategy="lazyOnload" id="G-2799Z0Q44Z">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2799Z0Q44Z', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <RecoilRoot>
        <MouseContextProvider>
          <Component {...pageProps} />
        </MouseContextProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
