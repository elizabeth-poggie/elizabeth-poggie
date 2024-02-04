import { Text } from "../../components/typography/text/text";
import { ICollegeNote } from "../../interfaces/note";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Markdown from "react-markdown";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import styles from "./note-details.module.scss";

interface IProps {
  noteDetails: ICollegeNote;
}

export function NoteDetails({ noteDetails }: IProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text variant="title">
          {noteDetails.course} - {noteDetails.title}
        </Text>
        <Text variant="subheading" style="italics">
          {noteDetails.subtitle}
        </Text>
      </header>
      <HorizontalLine />
      <div className={styles.content}>
        <Markdown
          children={noteDetails.content}
          components={{
            h1: ({ children }) => <Text variant="h1">{children}</Text>,
            h2: ({ children }) => <Text variant="h2">{children}</Text>,
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
                <span className={styles.inlineCode} {...props}>
                  {children}
                </span>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
