import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { NavBar } from "../src/components/navigation/nav-bar/nav-bar";
import { navItems } from ".";
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
      <NavBar navItems={navItems} />
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
