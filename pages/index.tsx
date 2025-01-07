import Head from "next/head";
import Meta from "../src/views/meta/meta";
import {
  CategoryToLinkMap,
  Frontmatter,
  ILink,
  INote,
} from "../src/interfaces/note";
import { getAllNotes } from "../src/utils/api";
import Burger from "../src/components/navigation/burger/Burger";
import { Home } from "../src/views/home/home";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
export const navItems: ILink[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/notes",
    text: "Notes",
  },
  {
    href: "/portfolio",
    text: "Portfolio",
  },
];

// TODO - maybe move this to live only in the relevant components
export interface MDXProps {
  /**
   * Note Content
   */
  source: MDXRemoteSerializeResult<Record<string, unknown>> & {
    frontmatter: Frontmatter;
  };
  /**
   * Base URL of where the images are located in the public && content folders
   * Used to enable relative linking for static website generators
   */
  assetPath?: string;
  /**
   * Show relatedNotes on the page?
   */
  relatedNotes?: CategoryToLinkMap;
}

interface IProps {
  allNotes: INote[];
}

export default function Index({ allNotes }: Readonly<IProps>) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie</title>
      </Head>
      <Burger navItems={navItems} />
      <div>
        <Home />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allNotes = getAllNotes([
    "slug",
    "category",
    "number",
    "type",
    "title",
    "subtitle",
    "created",
  ]);

  return {
    props: { allNotes },
  };
};
