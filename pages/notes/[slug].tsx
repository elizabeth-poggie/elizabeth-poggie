import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { INote } from "../../src/interfaces/note";
import { NoteDetails } from "../../src/views/note-details/note-details";
import { Burger } from "../../src/components/navigation/burger/Burger";
import { navItems } from "..";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from ".";
import {
  Frontmatter,
  getNotePaths,
  getNoteProps,
} from "../../src/utils/helpers/noteFetchers";
import { GetStaticPropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface IProps {
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
  baseFolder?: string;
}

type CategoryProperties = {
  color: string;
  relatedTypes?: string[];
};

type SupportedCategories = "User Interfaces" | "Intro to Programming" | "Admin";

type CategoryMap = {
  [key in SupportedCategories]: CategoryProperties;
};

export const categoryMap: CategoryMap = {
  "User Interfaces": {
    color: "green",
  },
  "Intro to Programming": {
    color: "yellow",
  },
  Admin: {
    color: "white",
  },
};

export default function NoteDetailsPage(props: IProps) {
  return (
    <>
      <Meta />
      <Head>
        <title>Poggie • Notes</title>
      </Head>
      <Burger navItems={navItems} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getNoteProps(ctx, NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}

export async function getStaticPaths() {
  return getNotePaths(NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}
