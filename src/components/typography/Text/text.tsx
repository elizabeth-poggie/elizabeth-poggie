import { cs } from "../../../utils/helpers/classHelpers";
import styles from "./text.module.scss";

const textVariantToStyleMap = {
  title: styles.title,
  subheading: styles.subheading,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  p: styles.p,
};

const alignToStyleMap = {
  left: null,
  center: styles.center,
  right: styles.right,
};

// TODO - Support the below types if i get bored

// type colours = "default" | "grey";
// type size = "default" | "xs" | "sm" | "md" | "lg";
// type weight = "default" | "bold" | "thin";
// type textTransform = "default" | "lowercase" | "uppercase" | "capitalize";
type TextAlign = "left" | "center" | "right";
// type overflowWrap = "normal" | "anywhere" | "break-word";
type TextVariant = "title" | "subheading" | "h1" | "h2" | "h3" | "p";

interface Props {
  children: string;
  /**
   * predefined style variants
   *
   * @example "title"
   */
  variant?: TextVariant;
  /**
   * text content alignment
   *
   * @example "center"
   */
  align?: TextAlign;
}

export function Text({ children, variant = "p", align = "left" }: Props) {
  return (
    <div className={cs(textVariantToStyleMap[variant], alignToStyleMap[align])}>
      {children}
    </div>
  );
}
