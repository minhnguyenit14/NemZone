import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import Heading1 from "../../components/Typography/Heading/Heading1";

export default function FirstPost() {
  return (
    <Layout>
      {/* <Head>
        <title>09</title>
      </Head> */}
      <h1 className>First Post</h1>
      <Heading1 clas></Heading1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
