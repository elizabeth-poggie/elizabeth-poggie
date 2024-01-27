import {
  IScrollableContainerProps,
  ScrollableContainer,
} from "../scrollable-container/scrollable-container";
import styles from "./carousel.module.scss";

interface IProps extends IScrollableContainerProps {}

// TODO - make the list items a child component here.
export function Carousel({ children }: IProps) {
  return (
    <ScrollableContainer>
      <div className={styles.carouselContainer}>{children}</div>
    </ScrollableContainer>
  );
}
