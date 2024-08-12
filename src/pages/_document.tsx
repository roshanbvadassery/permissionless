import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { AppConstant } from "src/constant/AppConstant";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en" className="notranslate" translate="no">
        <Head>
          <meta name="google" content="notranslate" />

          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600&family=Mohave:wght@300;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Krona+One&family=Work+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={AppConstant.meta.description} />
          <meta name="description" content={AppConstant.meta.description} />

          <meta property="og:title" content={AppConstant.meta.title} />
          <meta property="og:url" content={AppConstant.meta.url} />
          {/* <meta property="og:url2" content={AppConstant.meta.url2} /> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={AppConstant.meta.description}
          />
          <meta property="og:image" content={AppConstant.meta.image} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={AppConstant.meta.title} />
          <meta
            name="twitter:description"
            content={AppConstant.meta.description}
          />
          <meta name="twitter:image" content={AppConstant.meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
