import Head from "next/head";
import Meta from "../../../src/views/meta/meta";
import { Burger } from "../../../src/components/navigation/burger/Burger";
import { navItems } from "../..";
import { NOTES_BASE_FOLDER, NOTES_CATEGORIES } from "..";
import {
  getNotePaths,
  getNoteProps,
} from "../../../src/utils/helpers/noteFetchers";
import { GetStaticPropsContext } from "next";
import { MdxNoteDetails } from "../../../src/views/mdx-note-details/mdx-note-details";
import { MDXProps } from "../../recipes/[slug]";
import { Text } from "../../../src/components/typography/text/text";

interface IProps extends MDXProps {}

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
      <MdxNoteDetails {...props} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return getNoteProps(ctx, NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}

export async function getStaticPaths() {
  return getNotePaths(NOTES_BASE_FOLDER, NOTES_CATEGORIES);
}
