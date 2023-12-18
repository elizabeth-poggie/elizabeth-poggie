import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";
import { About } from "../src/views/about/about";

// TODO - set up a provider for global information
export default function Index() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <About />
      <Footer />
    </>
  );
}
