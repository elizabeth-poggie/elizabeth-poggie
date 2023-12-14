import Head from "next/head";
import { Home } from "../src/views/home/home";

// TODO - set up a provider for global information
// TODO - set up sticky header
// TODO - set up sticky footer
export default function Index() {
  return (
    <>
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <Home />
    </>
  );
}
