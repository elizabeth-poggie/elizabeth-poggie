import {
  IScrollableContainerProps,
  ScrollableContainer,
} from "../scrollable-container/scrollable-container";
import styles from "./carousel.module.scss";

interface IProps extends IScrollableContainerProps {}

export function Carousel({ children }: IProps) {
  return (
    <ScrollableContainer>
      <div className={styles.carouselContainer}>{children}</div>
    </ScrollableContainer>
  );
}
