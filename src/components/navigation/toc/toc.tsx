import React from "react";
import { NavItem } from "../../../interfaces/navigation";
import { Text } from "../../typography/text/text";
import { Link } from "../link/link";
import styles from "./toc.module.scss";
import tocbot from "tocbot";

interface IProps {
  navItems?: NavItem[];
}

export function Toc({ navItems }: Readonly<IProps>) {
  React.useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc", // Select the wrapper of toc
      contentSelector: ".js-toc-content", // Select the warpper of contents
      linkClass: styles.link,
      activeLinkClass: styles.activeLink,
      headingSelector: "h1", // Choose the heading tags
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <nav className={styles.container}>
      <span>Table of Contents</span>
      <div className="js-toc"></div>
    </nav>
  );
}
