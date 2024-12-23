import { useState } from "react";
import { Text } from "../../typography/text/text";
import styles from "./collapsible.module.scss";
import { ILink } from "../../../interfaces/note";
import { TextLink } from "../../navigation/link/link";
import { replaceHyphensWithSpaces } from "../../../utils/textFormatters";

interface IProps {
  title: string;
  isOpen?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export function Collapsible({
  title,
  children,
  isOpen = false,
  onClick,
}: IProps) {
  return (
    <>
      <button
        className={`${styles.collapsible} ${isOpen ? styles.active : ""}`}
        onClick={onClick}
      >
        <Text variant="h3" gutterBottom={1} style="capitalize">
          {replaceHyphensWithSpaces(title)}
        </Text>
        <div className={styles.arrow}>
          <ArrowIcon />
        </div>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </>
  );
}

interface ICollapsibleLinkListProps {
  links: ILink[];
  selectedText?: string;
  handleOnClick?: () => void;
}

export const CollapsibleLinkList = ({
  links,
  selectedText,
  handleOnClick,
}: ICollapsibleLinkListProps) => {
  return (
    <>
      {links.map((link: ILink) => {
        const isSelected = link.text.includes(selectedText);
        return (
          <div key={link.href} className={styles.listItem}>
            <TextLink
              variant="subheading"
              color={isSelected ? "white" : "grey"}
              href={link.href}
              onClick={() => handleOnClick()}
            >
              {replaceHyphensWithSpaces(link.text)}
            </TextLink>
          </div>
        );
      })}
    </>
  );
};

interface ICollapsibleListProps {
  collapsibles: { title: string; content: React.ReactNode }[];
  currentType?: string;
}

export function CollapsibleList({
  collapsibles,
  currentType,
}: ICollapsibleListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    collapsibles.findIndex((collapsible) => collapsible.title === currentType)
  );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {collapsibles.map((collapsible, index) => (
        <section className={styles.collapsibleItem}>
          <Collapsible
            key={index}
            title={collapsible.title}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          >
            {collapsible.content}
          </Collapsible>
        </section>
      ))}
    </div>
  );
}

export const ArrowIcon = () => (
  <svg
    fill="white"
    height="12px"
    width="12px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    xmlSpace="preserve"
  >
    <path
      id="XMLID_225_"
      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
    />
  </svg>
);
