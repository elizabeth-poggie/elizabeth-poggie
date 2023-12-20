import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";
import { footerItems } from ".";

export default function ArtPage() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <Footer footerItems={footerItems} />
    </>
  );
}
