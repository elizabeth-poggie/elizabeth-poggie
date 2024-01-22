import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import styles from "./scrollable-container.module.scss";

const scrollDirectionToStyleMap = {
  vertical: styles.vertical,
  horizontal: styles.horizontal,
};

const scrollDirectionToContainerMap = {
  vertical: styles.verticalContainer,
  horizontal: styles.horizontalContainer,
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

  /**
   * Lock window on inner container scroll
   * @default false
   */
  isLockWindowEnabled?: boolean;
}

export function ScrollableContainer({
  children,
  scrollDirection = "vertical",
  isLockWindowEnabled = false,
  heightMultiplier,
}: IProps) {
  React.useEffect(() => {
    isLockWindowEnabled ? (document.body.style.overflow = "hidden") : null;
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      width: "1px",
      backgroundColor: "white",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrackVertical = ({ style, ...props }) => {
    const trackStyle = {
      width: "1px",
      right: "0px",
      bottom: "0px",
      top: "0px",
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };
  const renderTrackHorizontal = ({ style, ...props }) => {
    const trackStyle = {
      width: "1px",
      right: "0px",
      bottom: "0px",
      top: "0px",
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
    <div
      // className={scrollDirectionToStyleMap[scrollDirection]}
      style={{
        height: heightMultiplier ? `calc(${heightMultiplier} * 5px)` : "100%",
      }}
    >
      <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        renderTrackHorizontal={renderTrackHorizontal}
        renderTrackVertical={renderTrackVertical}
        universal // config for NextJs, see more here => https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/usage.md#universal-rendering
      >
        <div className={scrollDirectionToContainerMap[scrollDirection]}>
          {children}
        </div>
      </Scrollbars>
    </div>
  );
}
