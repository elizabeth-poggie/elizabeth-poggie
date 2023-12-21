import React from "react";
import styles from "./scrollable-container.module.scss";
import { cs } from "../../../utils/helpers/classHelpers";

// TODO - move the scrollbar outside of the container following this example => https://stackoverflow.com/questions/74462846/place-scroll-bar-outside-div

const scrollDirectionToStyleMap = {
  vertical: styles.vertical,
  horizontal: styles.horizontal,
};

type ScrollDirection = "vertical" | "horizontal";

interface IProps {
  children: React.ReactNode;
  /**
   * Determines the height of the container as a function of 5px
   * @default 100%
   */
  heightMultiplier?: number;
  /**
   * Determines the scroll direction for the container
   * @default "vertical"
   */
  scrollDirection?: ScrollDirection;
}

export function ScrollableContainer({
  children,
  scrollDirection = "vertical",
  heightMultiplier,
}: IProps) {
  React.useEffect(() => {
    // TODO - maybe come up with a better solution for the 'Projects' view
    if (scrollDirection === "vertical") {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <div
      className={scrollDirectionToStyleMap[scrollDirection]}
      style={
        heightMultiplier
          ? { height: `calc(${heightMultiplier} * 5px)` }
          : { height: "100%" }
      }
    >
      {children}
    </div>
  );
}
