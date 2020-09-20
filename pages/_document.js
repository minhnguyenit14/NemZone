import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInittialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx);
    return { ...initalProps };
  }

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
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=243311399938661&autoLogAppEvents=1"
            nonce="fWqJuSgZ"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
