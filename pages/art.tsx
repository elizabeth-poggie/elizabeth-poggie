import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";
import { footerItems } from ".";
import { Art } from "../src/views/art/art";

export default function ArtPage() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <Art allArt={[]} />
      <Footer footerItems={footerItems} />
    </>
  );
}
