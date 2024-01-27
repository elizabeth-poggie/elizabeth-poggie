import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

export interface IScrollableContainerProps {
  children: React.ReactNode;
  /**
   * Lock window on inner container scroll
   * @default false
   */
  isLockWindowEnabled?: boolean;
}

export function ScrollableContainer({
  children,
  isLockWindowEnabled = false,
}: IScrollableContainerProps) {
  React.useEffect(() => {
    isLockWindowEnabled ? (document.body.style.overflow = "hidden") : null;
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      width: "1px",
      // backgroundColor: "white", // TODO - make thumb "white" eventually
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
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      renderTrackHorizontal={renderTrackHorizontal}
      renderTrackVertical={renderTrackVertical}
      universal // config for NextJs, see more here => https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/usage.md#universal-rendering
    >
      {children}
    </Scrollbars>
  );
}
