import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/assets/fonts/fonts.css" />
          {/** ---- Facebook page-plugin required component --- */}
          <script src="/fbMessenger.plugin.js"></script>
          {/** --- end region --- */}
        </Head>
        <body>
          <div id="fb-root"></div>
          <scrip
            defer
            async
            crossorigin="anonymous"
            nonce="ZphRaHDi"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1119644398129491&autoLogAppEvents=1"
          ></scrip>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
