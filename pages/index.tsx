import Head from "next/head";
import { Home } from "../src/views/home/home";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";

// TODO - set up a provider for global information
export default function Index() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <Home />
      <Footer />
    </>
  );
}
