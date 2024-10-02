import React from "react";
import styles from "./three-collumn-template.module.scss";
import { cs } from "../../../utils/helpers/classHelpers";

interface IProps {
  header: React.ReactNode;
  rightSidebar: React.ReactNode;
  mainContent: React.ReactNode;
  leftSidebar: React.ReactNode;
}

export function ThreeColumnTemplate({
  header,
  rightSidebar,
  mainContent,
  leftSidebar,
}: IProps) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>{header}</header>
        <main className={styles.main}>
          <section className={cs(styles.sideBarSection, styles.left)}>
            {leftSidebar}
          </section>
          <section className={styles.contentSection}>{mainContent}</section>
          <section className={styles.sideBarSection}>{rightSidebar}</section>
        </main>
      </div>
    </>
  );
}
