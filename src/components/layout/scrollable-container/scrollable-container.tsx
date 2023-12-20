import React from "react";
import styles from "./scrollable-container.module.scss";

interface Props {
  children: React.ReactNode;
  /**
   * Determines the height of the container as a function of 5px
   * @default 100
   */
  heightMultiplier?: number;
}

export function ScrollableContainer({
  children,
  heightMultiplier = 100,
}: Props) {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <div
      className={styles.container}
      style={{ height: `calc(${heightMultiplier} * 5px)` }}
    >
      {children}
    </div>
  );
}
