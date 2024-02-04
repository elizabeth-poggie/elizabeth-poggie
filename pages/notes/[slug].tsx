import Head from "next/head";
import Meta from "../../src/views/meta/meta";
import { getAllNotes, getBySlug, noteDirectory } from "../../src/utils/api";
import { ICollegeNote } from "../../src/interfaces/note";
import Markdown from "react-markdown";
import { Text } from "../../src/components/typography/text/text";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  noteDetails: ICollegeNote;
}

export default function NoteDetailsPage({ noteDetails }: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>
          {noteDetails.title} - {noteDetails.course}
        </title>
      </Head>
      <Markdown
        children={noteDetails.content}
        components={{
          h1: ({ children }) => <Text variant="title">{children}</Text>,
          h2: ({ children }) => <Text variant="h1">{children}</Text>,
          p: ({ children }) => <Text variant="p">{children}</Text>,
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <span className={className} {...props}>
                {children}
              </span>
            );
          },
        }}
      />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const details = getBySlug(
    params.slug,
    ["title", "subtitle", "course", "content"],
    noteDirectory
  );

  return {
    props: {
      noteDetails: {
        ...details,
      },
    },
  };
}

export async function getStaticPaths() {
  const notes = getAllNotes(["slug"]);

  return {
    paths: notes.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
