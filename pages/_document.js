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
          <link rel="stylesheet" href="/fonts/fonts.css" />
        </Head>
        <body>
          {/** ---- Facebook page-plugin required component --- */}
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=101798941684900&autoLogAppEvents=1"
            nonce="QrXhXqkG"
          ></script>
          {/** --- end region --- */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
