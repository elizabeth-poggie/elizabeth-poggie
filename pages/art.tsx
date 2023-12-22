import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";
import { footerItems } from ".";
import { getAllArt } from "../src/utils/api";
import { IArt } from "../src/interfaces/art";
import { Art } from "../src/views/art/art";

interface IProps {
  allArt: Array<IArt>;
}

export default function ArtPage({ allArt }: IProps) {
  console.log(allArt);
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <Art allArt={allArt} />
      <Footer footerItems={footerItems} />
    </>
  );
}

export const getStaticProps = async () => {
  const allArt = getAllArt(["slug", "src", "year"]);
  return {
    props: { allArt },
  };
};
