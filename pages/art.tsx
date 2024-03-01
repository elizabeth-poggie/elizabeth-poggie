import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { getAllArt } from "../src/utils/api";
import { IArt } from "../src/interfaces/art";
import { Art } from "../src/views/art/art";

interface IProps {
  allArt: IArt[];
}

export default function ArtPage({ allArt }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie - Art</title>
      </Head>
      {/* <NavBar navItems={navItems} /> */}
      <Art allArt={allArt} />
    </>
  );
}

export const getStaticProps = async () => {
  const allArt = getAllArt(["slug", "src", "year"]);
  return {
    props: { allArt },
  };
};
