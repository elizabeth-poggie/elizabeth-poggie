import React from "react";
import styles from "./note-layout.module.scss";

interface IProps {
  leftContent?: React.ReactNode;
  rightContent: React.ReactNode;
}

export function NoteLayout({ leftContent, rightContent }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.rightContentContainer}>{rightContent}</div>
    </div>
  );
}
