import { cs } from "../../../utils/helpers/classHelpers";
import styles from "./text.module.scss";

const textVariantToStyleMap = {
  title: styles.title,
  subheading: styles.subheading,
  subheading2: styles.subheading2,
  h1: styles.h1,
  p: styles.p,
};

const alignToStyleMap = {
  left: null,
  center: styles.center,
  right: styles.right,
  justify: styles.justify,
};

const styleToStyleMap = {
  normal: null,
  italics: styles.italics,
  uppercase: styles.uppercase,
};

type TextAlign = "left" | "center" | "right" | "justify";
type TextVariant = "title" | "subheading" | "subheading2" | "h1" | "p";
type TextStyle = "normal" | "italics" | "uppercase";

interface IProps {
  children: React.ReactNode;
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
  /**
   * set different font styles
   *
   * @example "italics"
   */
  style?: TextStyle;
}

export function Text({
  children,
  variant = "p",
  align = "left",
  style = "normal",
}: IProps) {
  return (
    <div
      className={cs(
        textVariantToStyleMap[variant],
        alignToStyleMap[align],
        styleToStyleMap[style]
      )}
    >
      {children}
    </div>
  );
}
