import React from "react";
import styles from "./three-collumn-template.module.scss";

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
        {header}
        <main className={styles.main}>
          <section className={styles.sideBarSection}>{leftSidebar}</section>
          <section className={styles.contentSection}>{mainContent}</section>
          <section className={styles.sideBarSection}>{rightSidebar}</section>
        </main>
      </div>
    </>
  );
}
