import React from "react";
import { HorizontalLine } from "../../display/horizontal-line/horizontal-line";
import { Text } from "../../typography/text/text";
import { ScrollableContainer } from "../scrollable-container/scrollable-container";
import styles from "./list-layout.module.scss";

interface IProps {
  title: string;
  leftContent: React.ReactNode;
  listContent: React.ReactNode;
}

// TODO - make the list items a child component here.
export function ListLayout({ title, leftContent, listContent }: IProps) {
  const [height, setHeight] = React.useState<number>(0);
  const observedHeightRef = React.useRef(null);

  React.useEffect(() => {
    // custom styling - configure left content div padding to match title and horizontal line height
    if (!observedHeightRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (
        observedHeightRef.current &&
        observedHeightRef.current.offsetHeight !== height
      ) {
        setHeight(observedHeightRef.current.offsetHeight);
      }
    });
    resizeObserver.observe(observedHeightRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [observedHeightRef]);

  return (
    <div className={styles.container}>
      <div
        className={styles.letContentContainer}
        style={{ paddingTop: `${height}px` }}
      >
        {leftContent}
      </div>
      <div className={styles.list}>
        <div ref={observedHeightRef}>
          <Text variant="title">{title}</Text>
          <HorizontalLine />
        </div>
        <div className={styles.scrollableContainer}>
          <ScrollableContainer>{listContent}</ScrollableContainer>
        </div>
      </div>
    </div>
  );
}
