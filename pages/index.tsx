import Layout from "../src/components/templates/layout";
import { getAllPresentations } from "../src/services/api";
import Head from "next/head";
import Post from "../src/interfaces/post";
import Note from "../src/interfaces/note";
import Presentation from "../src/interfaces/presentation";
import Text from "../src/components/typography/Text/text";

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

// TODO - set up a provider for global information

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
