import { cs } from "../../../utils/helpers/classHelpers";
import styles from "./text.module.scss";

const textVariantToStyleMap = {
  title: styles.title,
  title2: styles.title2,
  title3: styles.title3,
  subheading: styles.subheading,
  subheading2: styles.subheading2,
  h1: styles.h1,
  h2: styles.h2,
  p: styles.p,
  link: styles.link,
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

const colorToStyleMap = {
  white: styles.white,
  grey: styles.grey,
  green: styles.green,
};

type TextAlign = "left" | "center" | "right" | "justify";
type TextVariant =
  | "title"
  | "title2"
  | "title3"
  | "subheading"
  | "subheading2"
  | "h1"
  | "h2"
  | "p"
  | "link";

type TextStyle = "normal" | "italics" | "uppercase";

type TextColor = "white" | "grey" | "green";

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
  /**
   * set text color
   * @example "grey"
   */
  color?: TextColor;
  id?: string; // probs need to extend the attribute class here instead lol
}

export function Text({
  children,
  id,
  variant = "p",
  align = "left",
  color = "white",
  style = "normal",
}: Readonly<IProps>) {
  return (
    <span
      id={id}
      className={cs(
        textVariantToStyleMap[variant],
        alignToStyleMap[align],
        styleToStyleMap[style],
        colorToStyleMap[color]
      )}
    >
      {children}
    </span>
  );
}
