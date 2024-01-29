import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { mdxNotesDirectory } from "../../src/utils/api";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { Text } from "../../src/components/typography/text/text";

// /notes/week2 works :)
// TODO - combine link Note View and Notes List View together
export default function MdxPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("yeet");
  return (
    <div>
      <Head>
        <title>Yeet</title>
      </Head>
      <MDXRemote
        {...source}
        components={{
          h1: ({ children }) => <Text variant="title">{children}</Text>,
          h2: ({ children }) => <Text variant="h1">{children}</Text>,
          p: ({ children }) => <Text variant="p">{children}</Text>,
        }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(mdxNotesDirectory);
  return {
    paths: files.map((file) => ({
      params: {
        slug: file,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { slug } = ctx.params;

  const source = fs.readFileSync(
    path.join(mdxNotesDirectory, slug as string, (slug + ".mdx") as string),
    "utf8"
  );

  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
  };
}
