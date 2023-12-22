import Head from "next/head";
import Meta from "../../src/views/meta/meta";

interface Props {}

export default function ArtDetailsPage({}: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
    </>
  );
}
