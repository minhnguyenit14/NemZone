import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/assets/fonts/fonts.css" />
          {/** ---- Facebook page-plugin required component --- */}
          {/* <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="ZphRaHDi"></script> */}
          {/** --- end region --- */}
        </Head>
        <body>
          <div id="fb-root"></div>
          <script src="/fbMessenger.plugin.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
