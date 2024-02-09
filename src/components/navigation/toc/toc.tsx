import React from "react";
import { NavItem } from "../../../interfaces/navigation";
import { Text } from "../../typography/text/text";
import { Link } from "../link/link";
import styles from "./content-navigation.module.scss";
import tocbot from "tocbot";

interface IProps {
  navItems?: NavItem[];
}

export function Toc({ navItems }: Readonly<IProps>) {
  React.useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc", // Select the wrapper of toc
      contentSelector: ".js-toc-content", // Select the warpper of contents
      headingSelector: "h1", // Choose the heading tags
      /* Optional 1.
      Enable these if you have a sticky header and adjust the offset value
      */
      // headingsOffset: 100,
      // scrollSmoothOffset: -100,
      /* Optional 2. 
      Enable this if 'active' class on scroll won't work properly
      */
      // hasInnerContainers: true,
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <nav>
      <span>Table of Contents</span>
      <div className="js-toc"></div>
    </nav>
  );
}
