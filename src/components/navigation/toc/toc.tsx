import React from "react";
import styles from "./toc.module.scss";
import tocbot from "tocbot";

interface IProps {}

export const TOC_NOTE_DETAILS_OPTIONS: tocbot.IStaticOptions = {
  tocSelector: ".js-toc", // Select the wrapper of toc
  contentSelector: ".js-toc-content", // Select the warpper of contents
  linkClass: styles.link,
  activeLinkClass: styles.activeLink,
  listClass: styles.list,
  headingSelector: ".js-toc-heading",
};

export function Toc({}: Readonly<IProps>) {
  return (
    <nav>
      <div className="js-toc"></div>
    </nav>
  );
}
