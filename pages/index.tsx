
import Layout from "../components/templates/layout";
import { getAllPresentations } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Note from "../interfaces/note";
import Presentation from "../interfaces/presentation";
import Text from "../components/typography/Text/text";

type Props = {
  allPosts: Post[];
  allNotes: Note[];
  allPresentations: Presentation[];
};


export default function Index({ allPresentations }: Props) {
  return (
      <Layout>
        <Head>
          <title>Elizabeth Poggie</title>
        </Head>
            <Text variant="h1">Elizabeth Poggie</Text>
      </Layout>
  );
}

export const getStaticProps = async () => {

  const allPresentations = getAllPresentations([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPresentations },
  };
};
