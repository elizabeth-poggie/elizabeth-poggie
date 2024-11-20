import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { INote } from "../../src/interfaces/note";
import { GetStaticPropsContext } from "next";
import { Gallery } from "../../src/views/gallery/gallery";
import { getAllNotesForCategories } from "../../src/utils/noteFetchers";

export const PORTFOLIO_CATEGORIES = ["management", "hackathon"];
export const PORTFOLIO_BASE_FOLDER = "portfolio";

interface IProps {
  allNotes: INote[];
}

export default function PortfolioPage({ allNotes }: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Portfolio</title>
      </Head>
      <Burger navItems={navItems} />
      <Gallery allNotes={allNotes} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const allNotes: INote[] = await getAllNotesForCategories(
    PORTFOLIO_BASE_FOLDER,
    PORTFOLIO_CATEGORIES
  );
  return {
    props: {
      allNotes,
    },
  };
}
