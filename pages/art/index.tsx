import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllArt } from "../../src/utils/api";
import { IArt } from "../../src/interfaces/art";
import { Art } from "../../src/views/art/art";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";

interface IProps {
  allArt: IArt[];
}

export default function ArtPage({ allArt }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Art</title>
      </Head>
      <Burger navItems={navItems} />
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
