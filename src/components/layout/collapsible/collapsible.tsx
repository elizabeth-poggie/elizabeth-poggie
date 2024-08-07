import { useState } from "react";
import { Text } from "../../typography/text/text";
import styles from "./collapsible.module.scss";
import { ILink } from "../../../interfaces/note";
import { TextLink } from "../../navigation/link/link";

interface IProps {
  title: string;
  children: React.ReactNode;
}

export function Collapsible({ title, children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`${styles.collapsible} ${isOpen ? styles.active : ""}`}
        onClick={handleToggle}
      >
        <Text variant="h3" gutterBottom={1}>
          {title}
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
}

export const CollapsibleLinkList = ({ links }: ICollapsibleLinkListProps) => {
  return (
    <>
      {links.map((link: ILink) => {
        return (
          <TextLink
            key={link.href}
            variant="subheading"
            color="grey"
            href={link.href}
          >
            {link.text}
          </TextLink>
        );
      })}
    </>
  );
};

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
