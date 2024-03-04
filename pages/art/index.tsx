import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllArt } from "../../src/utils/api";
import { IArt } from "../../src/interfaces/art";
import { Art } from "../../src/views/art/art";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { sortByCreatedDescending } from "../../src/utils/helpers/sortByDate";

interface IProps {
  allArt: INote[];
}

export default function ArtPage({ allArt }: IProps) {
  const sortedArt = sortByCreatedDescending(allArt);
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Art</title>
      </Head>
      <Burger navItems={navItems} />
      <Art allArt={sortedArt} />
    </>
  );
}

export const getStaticProps = async () => {
  const allArt = getAllArt(["slug", "coverSrc", "created"]);
  return {
    props: { allArt },
  };
};
